import { POPUP_ID } from './constants';
import { popupHtml } from './dom/popupHtml';
import { getConfig } from '../../config';

const QUERY_PATH = '#app-container > div > div.GameComponent-container > div > div.Layout';

const getLayoutParentElement = () => {
    const element = document.querySelector(QUERY_PATH);
    if (!element) {
        throw new Error('Unable to find layout parent element');
    }

    return element;
};

export const getPopupElement = () => {
    return document.getElementById(POPUP_ID);
};

export const addContainer = () => {
    const parentElement = getLayoutParentElement();

    const rawHtml = getConfig().overridePopupHtml ?? popupHtml;
    parentElement.insertAdjacentHTML('afterend', rawHtml);
};

export const removeContainer = () => {
    getPopupElement()?.remove();
};
