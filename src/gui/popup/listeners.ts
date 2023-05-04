import { onLoadConfigButtonClick, onSaveConfigButtonClick } from './events/configButton';
import { writeCoordinates } from './events/coordinatesDisplay';
import { onDebugButtonClick } from './events/debugButton';
import { onGhostOffClick, onGhostOnClick } from './events/ghostButton';
import { writeMap } from './events/mapDisplay';
import {
    onSpeedModifierDecreaseClick,
    onSpeedModifierIncreaseClick,
    writeSpeedModifier,
} from './events/speedModifierButton';
import { detachTeleportButtons, writeAndAttachTeleportButtons } from './events/teleport';

interface ClickListener {
    id: string;
    handler: (...args: any[]) => any;
}

let eventLoopInterval: number | undefined = undefined;

const eventLoop = () => {
    writeMap();
    writeCoordinates();
    writeSpeedModifier();
};

const clickListeners: ClickListener[] = [
    { id: 'gmx-btn', handler: onDebugButtonClick },

    { id: 'gmx-load-config-btn', handler: onLoadConfigButtonClick },
    { id: 'gmx-save-config-btn', handler: onSaveConfigButtonClick },

    { id: 'gmx-ghost-on-btn', handler: onGhostOnClick },
    { id: 'gmx-ghost-off-btn', handler: onGhostOffClick },

    { id: 'gmx-speed-modifier-decrease-btn', handler: onSpeedModifierDecreaseClick },
    { id: 'gmx-speed-modifier-increase-btn', handler: onSpeedModifierIncreaseClick },
];

export const attachListeners = () => {
    for (const clickListener of clickListeners) {
        document.getElementById(clickListener.id)?.addEventListener('click', clickListener.handler);
    }

    eventLoopInterval = setInterval(eventLoop, 100);

    writeAndAttachTeleportButtons();
};

export const detachListeners = () => {
    detachTeleportButtons();

    for (const clickListener of clickListeners) {
        document.getElementById(clickListener.id)?.removeEventListener('click', clickListener.handler);
    }

    clearInterval(eventLoopInterval);
};
