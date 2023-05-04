export const getUserState = (id: string) => {
    return window.gameSpace.gameState[id];
};

export const getCurrentUserState = () => {
    return getUserState(window.gameSpace.id);
};

export const findUserIdByName = (name: string) => {
    const userId = Object.keys(window.gameSpace.gameState).filter(
        (x) => window.gameSpace.gameState[x]?.name === name,
    )[0];

    if (!userId) {
        throw new Error(`User "${name}" not found`);
    }

    return userId;
};

// NOTE: Export for console
window.__GATHER_MOD_MANAGER.functions['getUserState'] = getUserState;
window.__GATHER_MOD_MANAGER.functions['getCurrentUserState'] = getCurrentUserState;
window.__GATHER_MOD_MANAGER.functions['findUserIdByName'] = findUserIdByName;
