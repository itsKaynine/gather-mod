import { getWs } from '../utils/websocket';

export const doNotDisturbOn = () => {
    const ws = getWs();
    if (!ws) {
        return;
    }

    const msg = new Uint8Array([0x42, 0x02, 0x08, 0x01]);
    ws.send(msg);
};

export const doNotDisturbOff = () => {
    const ws = getWs();
    if (!ws) {
        return;
    }

    const msg1 = new Uint8Array([0xfa, 0x07, 0x00]);
    const msg2 = new Uint8Array([0xea, 0x01, 0x02, 0x08, 0x01]);
    const msg3 = new Uint8Array([0x42, 0x00]);

    ws.send(msg1);
    ws.send(msg2);
    ws.send(msg3);
};

// NOTE: Export for console
window.__GATHER_MOD_MANAGER.functions['doNotDisturbOn'] = doNotDisturbOn;
window.__GATHER_MOD_MANAGER.functions['doNotDisturbOff'] = doNotDisturbOff;
