import { getWs } from '../utils/websocket';

export const ghostOn = () => {
    const ws = getWs();
    if (!ws) {
        return;
    }

    const msg = new Uint8Array([0x82, 0x02, 0x02, 0x08, 0x01]);
    ws.send(msg);
};

export const ghostOff = () => {
    const ws = getWs();
    if (!ws) {
        return;
    }

    const msg = new Uint8Array([0x82, 0x02, 0x00]);
    ws.send(msg);
};

// NOTE: Export for console
window.__GATHER_MOD_MANAGER.functions['ghostOn'] = ghostOn;
window.__GATHER_MOD_MANAGER.functions['ghostOff'] = ghostOff;
