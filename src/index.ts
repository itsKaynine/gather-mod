import { initConfig } from './config';

const init = async () => {
    // Init config
    initConfig();

    // Init manager
    window.__GATHER_MOD_MANAGER = {
        websockets: [],
        functions: {},
    };

    // Inject
    const inject = await import('./inject');
    await inject.inject();
};

init();
