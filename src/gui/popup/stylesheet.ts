import { POPUP_STYLE_ID } from './constants';
import { popupCss } from './dom/popupCss';
import { getConfig } from '../../config';

export const addStylesheet = () => {
    const style = document.createElement('style');
    style.id = POPUP_STYLE_ID;

    const rawCss = getConfig().overridePopupCss ?? popupCss;
    style.innerHTML = rawCss;

    document.head.appendChild(style);
};

export const removeStylesheet = () => {
    document.getElementById(POPUP_STYLE_ID)?.remove();
};
