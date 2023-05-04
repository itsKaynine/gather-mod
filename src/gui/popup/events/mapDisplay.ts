import { generateLightColorFromString } from '../../../utils/color';
import { getCurrentUserState } from '../../../utils/user';

export const writeMap = () => {
    const state = getCurrentUserState();
    if (state) {
        const el = document.getElementById('gmx-map');
        if (el) {
            el.style.color = generateLightColorFromString(state.map);
            el.innerHTML = `[${state.map}]`;
        }
    }
};
