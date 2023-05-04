import { getCurrentUserState } from '../../../utils/user';

export const writeCoordinates = () => {
    const state = getCurrentUserState();
    if (state) {
        const el = document.getElementById('gmx-coordinates');
        if (el) {
            el.innerHTML = `x: ${state.x}, y: ${state.y}`;
        }
    }
};
