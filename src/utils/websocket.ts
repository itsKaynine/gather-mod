import { getConfig } from '../config';

/* eslint-disable prefer-rest-params */
export const hookWebSocket = () => {
    const OriginalWebsocket = window.WebSocket;
    const ProxiedWebSocket = function () {
        // @ts-ignore
        const ws = new OriginalWebsocket(...arguments);

        // Add the instance to list
        window.__GATHER_MOD_MANAGER.websockets.push(ws);

        const config = getConfig();

        // Proxy the send function
        const originalSend = ws.send;
        const proxiedSend = function () {
            if (config.verbose) {
                console.log('Intercepted outgoing ws message', arguments);
            }

            // @ts-ignore
            return originalSend.apply(this, arguments);
        };
        ws.send = proxiedSend;

        // Intercept message
        ws.addEventListener('message', function (e) {
            if (config.verbose) {
                console.log('Intercepted incoming message', e, e.data);
            }
        });

        return ws;
    };

    // Override WebSocket class with intercepted
    (window as any).WebSocket = ProxiedWebSocket;
};

export const getWs = () => {
    const protocol = 'gather-v2';
    const websockets = window.__GATHER_MOD_MANAGER.websockets.filter((w) => w.protocol === protocol);
    if (websockets.length === 0) {
        throw new Error(`WebSocket (${protocol}) instance does not exist`);
    }

    return websockets[websockets.length - 1];
};
