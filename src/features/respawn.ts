import { getWs } from '../utils/websocket';

export const respawn = () => {
    const ws = getWs();
    if (!ws) {
        return;
    }

    const msg = new Uint8Array([0xf2, 0x01, 0x00]);
    ws.send(msg);
};

// NOTE: Export for console
window.__GATHER_MOD_MANAGER.functions['respawn'] = respawn;
