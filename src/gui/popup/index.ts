import { getConfig } from '../../config';
import { addContainer, removeContainer, getPopupElement } from './container';
import { attachListeners, detachListeners } from './listeners';
import { addStylesheet, removeStylesheet } from './stylesheet';

export const isPopupOpen = () => {
    return !!getPopupElement();
};

export const openPopup = () => {
    // Ignore if already opened
    if (isPopupOpen()) {
        console.warn('Popup already opened');
        return;
    }

    // Setup
    addStylesheet();
    addContainer();
    attachListeners();
};

export const closePopup = () => {
    // Teardown
    detachListeners();
    removeContainer();
    removeStylesheet();
};

export const togglePopup = () => {
    if (isPopupOpen()) {
        closePopup();
    } else {
        openPopup();
    }
};

const toggleKeyDown = (event: KeyboardEvent) => {
    if (event.key == getConfig().togglePopupKey) {
        togglePopup();
    }
};

export const subscribeTogglePopupHotkey = () => {
    document.addEventListener('keydown', toggleKeyDown);
};

export const unsubscribeTogglePopupHotkey = () => {
    document.removeEventListener('keydown', toggleKeyDown);
};
