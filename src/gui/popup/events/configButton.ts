import { loadConfig, saveConfig } from '../../../config';

export const onLoadConfigButtonClick = () => {
    loadConfig();
};

export const onSaveConfigButtonClick = () => {
    saveConfig();
};
