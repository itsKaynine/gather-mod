import { decreaseSpeedModifier, getSpeedModifier, increaseSpeedModifier } from '../../../features/speedModifier';

export const onSpeedModifierIncreaseClick = () => {
    increaseSpeedModifier();
};

export const onSpeedModifierDecreaseClick = () => {
    decreaseSpeedModifier();
};

export const writeSpeedModifier = () => {
    const speedModifier = getSpeedModifier();
    const el = document.getElementById('gmx-speed-modifier');
    if (el) {
        el.innerHTML = `${speedModifier ?? '-'}`;
    }
};
