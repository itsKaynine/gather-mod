import { GatherModConfig } from './types/config';

const DEFAULT_CONFIG: GatherModConfig = {
    verbose: false,
    teleportPresets: [],
    togglePopupKey: 'End',
    overridePopupCss: undefined,
    overridePopupHtml: undefined,
};

export const initConfig = () => {
    loadConfig();
};

export const loadConfig = () => {
    // Check config in local storage
    const rawContent = window.localStorage.getItem('__GATHER_MOD_CONFIG');
    if (rawContent) {
        try {
            // Parse config
            const loadedConfig: GatherModConfig = JSON.parse(rawContent);

            // Patch new values
            for (const key in DEFAULT_CONFIG) {
                const k = key as keyof GatherModConfig;
                if (!(k in loadedConfig)) {
                    (loadedConfig as any)[k] = DEFAULT_CONFIG[k];
                }
            }

            console.log('Loaded config', loadedConfig);
            window.__GATHER_MOD_CONFIG = loadedConfig;
            return;
        } catch (err) {
            console.warn('Unable to load config', err);
        }
    }

    // Use default
    console.log('Using default config', DEFAULT_CONFIG);
    window.__GATHER_MOD_CONFIG = DEFAULT_CONFIG;
};

export const saveConfig = () => {
    window.localStorage.setItem('__GATHER_MOD_CONFIG', JSON.stringify(window.__GATHER_MOD_CONFIG));
    console.log('Config saved', window.__GATHER_MOD_CONFIG);
};

export const getConfig = () => window.__GATHER_MOD_CONFIG;
