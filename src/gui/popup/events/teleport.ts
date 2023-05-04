import { getConfig } from '../../../config';
import { teleport } from '../../../features/teleport';

interface ElementPair {
    element: HTMLButtonElement;
    handler: (...args: any) => any;
}

let elementPairs: ElementPair[] = [];

export const writeAndAttachTeleportButtons = () => {
    const container = document.getElementById('gmx-teleport-buttons');
    if (!container) {
        return;
    }

    const teleportPresets = getConfig().teleportPresets;

    for (let i = 0; i < teleportPresets.length; i++) {
        const teleportPreset = teleportPresets[i];
        if (!teleportPreset) {
            continue;
        }

        const handler = () => {
            teleport(teleportPreset.args);
        };

        // Create button
        const btn = document.createElement('button');
        btn.id = `gmx-teleport-preset-${i}`;
        btn.classList.add('btn-default', 'flex-item');
        btn.innerText = teleportPreset.name;
        btn.addEventListener('click', handler);

        // Add to container
        container.appendChild(btn);

        // Add to list
        elementPairs.push({ element: btn, handler });
    }
};

export const detachTeleportButtons = () => {
    const container = document.getElementById('gmx-teleport-buttons');

    for (const pair of elementPairs) {
        pair.element.removeEventListener('click', pair.handler);
        container?.removeChild(pair.element);
    }

    // Clear list
    elementPairs = [];
};
