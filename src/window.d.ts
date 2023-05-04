import { GatherModConfig } from './types/config';
import { Game, GameSpace } from './types/gather';
import { GatherModManager } from './types/manager';

declare global {
    interface Window {
        // Config
        __GATHER_MOD_CONFIG: GatherModConfig;
        // Manager
        __GATHER_MOD_MANAGER: GatherModManager;

        // Gather globals
        game: Game;
        gameSpace: GameSpace;
    }
}
