// WORKAROUND: Syntax highlighting for vscode
// TODO: Use custom loader instead
const css = (strings: any) => strings[0];

export const popupCss = css`
    .gmx-popup {
        width: 500px;
        height: 400px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.69);
        backdrop-filter: blur(5px);
        border-radius: 20px;
    }

    .gmx-popup div {
        color: white;
    }

    .gmx-popup .title {
        font-size: 22px;
        padding-top: 5px;
    }
    .gmx-popup .section-header {
        font-size: 16px;
        padding: 5px 0;
    }

    .gmx-popup .divider {
        width: 100%;
        height: 2px;
        background: rgba(120, 120, 120, 0.5);
        margin: 10px 0;
    }

    .gmx-popup .flex {
        display: flex;
    }
    .gmx-popup .flex-item {
        margin: 0 2px;
    }

    .gmx-popup .btn-default {
        cursor: pointer;
    }
`;
