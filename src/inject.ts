import { subscribeTogglePopupHotkey } from './gui/popup';
import { hookWebSocket } from './utils/websocket';

export const inject = async () => {
    // Hook websocket
    hookWebSocket();

    // Use hotkey
    subscribeTogglePopupHotkey();
};
