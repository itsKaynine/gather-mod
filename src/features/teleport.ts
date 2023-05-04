import { TeleportArgs } from '../types/teleport';
import { findUserIdByName, getUserState } from '../utils/user';

export const teleport = (args: TeleportArgs) => {
    switch (args.type) {
        case 'location': {
            window.game.teleport(args.mapId, args.x, args.y);
            break;
        }
        case 'user': {
            if (args.query.id) {
                teleportToUser(args.query.id);
            } else if (args.query.name) {
                teleportToUserByName(args.query.name);
            } else {
                console.warn('Invalid user query', args);
            }
            break;
        }
        default: {
            console.warn('Invalid query', args);
            break;
        }
    }
};

export const teleportToUserByName = (name: string) => {
    const userId = findUserIdByName(name);
    const userState = getUserState(userId);
    if (!userState) {
        return;
    }

    window.game.teleport(userState.map, userState.x, userState.y);
};

export const teleportToUser = (id: string) => {
    const userState = getUserState(id);
    if (!userState) {
        return;
    }

    window.game.teleport(userState.map, userState.x, userState.y);
};

// NOTE: Export for console
window.__GATHER_MOD_MANAGER.functions['teleport'] = teleport;
window.__GATHER_MOD_MANAGER.functions['teleportToUserByName'] = teleportToUserByName;
window.__GATHER_MOD_MANAGER.functions['teleportToUser'] = teleportToUser;
