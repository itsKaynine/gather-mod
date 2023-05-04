// WORKAROUND: Syntax highlighting for vscode
// TODO: Use custom loader instead
const html = (strings: any) => strings[0];

export const popupHtml = html`
    <div
        id="gmx-popup-root"
        class="Layout"
        style="display: flex; position: fixed; gap: 8px; margin: 16px; flex-direction: column;"
    >
        <div class="gmx-popup">
            <div class="title">Gather Mod</div>

            <div class="divider"></div>

            <div class="flex">
                <div id="gmx-map" class="flex-item">[-]</div>
                <div id="gmx-coordinates" style="margin-left: 4px">x: -, y: -</div>
            </div>

            <div style="margin: 10px 0;">
                <button id="gmx-btn" class="btn-default">Debug</button>
            </div>

            <div class="divider"></div>

            <div class="section-header">Config</div>
            <div class="flex">
                <button id="gmx-load-config-btn" class="btn-default flex-item">Load Config</button>
                <button id="gmx-save-config-btn" class="btn-default flex-item">Save Config</button>
            </div>

            <div class="divider"></div>

            <div class="section-header">Ghost</div>
            <div class="flex">
                <button id="gmx-ghost-on-btn" class="btn-default flex-item">ON</button>
                <button id="gmx-ghost-off-btn" class="btn-default flex-item">OFF</button>
            </div>

            <div class="divider"></div>

            <div class="section-header">Speed Modifier</div>
            <div class="flex">
                <button id="gmx-speed-modifier-decrease-btn" class="btn-default flex-item">-</button>
                <div id="gmx-speed-modifier" class="flex-item">1</div>
                <button id="gmx-speed-modifier-increase-btn" class="btn-default flex-item">+</button>
            </div>

            <div class="divider"></div>

            <div class="section-header">Teleport</div>
            <div id="gmx-teleport-buttons" class="flex"></div>
        </div>
    </div>
`;
