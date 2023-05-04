export interface TeleportLocationArgs {
    type: 'location';
    mapId: string;
    x: number;
    y: number;
}

export interface TeleportUserArgs {
    type: 'user';
    query: {
        id?: string;
        name?: string;
    };
}

export type TeleportArgs = TeleportLocationArgs | TeleportUserArgs;

export interface TeleportPreset {
    name: string;
    args: TeleportArgs;
}
