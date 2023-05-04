import { getCurrentUserState } from '../utils/user';

export const increaseSpeedModifier = () => {
    const state = getCurrentUserState();
    if (!state) {
        return;
    }

    if (state.speedModifier + 1 < 100) {
        window.game.setSpeedModifier(state.speedModifier + 1, window.gameSpace.id);
    }
};

export const decreaseSpeedModifier = () => {
    const state = getCurrentUserState();
    if (!state) {
        return;
    }

    if (state.speedModifier - 1 > 0) {
        window.game.setSpeedModifier(state.speedModifier - 1, window.gameSpace.id);
    }
};

export const getSpeedModifier = () => {
    const state = getCurrentUserState();
    if (!state) {
        return undefined;
    }

    return state.speedModifier;
};

// NOTE: Export for console
window.__GATHER_MOD_MANAGER.functions['increaseSpeedModifier'] = increaseSpeedModifier;
window.__GATHER_MOD_MANAGER.functions['decreaseSpeedModifier'] = decreaseSpeedModifier;
window.__GATHER_MOD_MANAGER.functions['getSpeedModifier'] = getSpeedModifier;
