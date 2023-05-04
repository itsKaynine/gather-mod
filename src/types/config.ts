import { TeleportPreset } from './teleport';

export interface GatherModConfig {
    verbose: boolean;
    togglePopupKey: string;
    teleportPresets: TeleportPreset[];
    overridePopupHtml: string | undefined;
    overridePopupCss: string | undefined;
}
