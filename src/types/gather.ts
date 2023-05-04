export interface Game {
    spaceId: string;
    setSpeedModifier(modifier: number, gameSpaceId: string): any;
    teleport(mapId: string, x: number, y: number): void;
}

export interface GameSpace {
    id: string;
    mapId: string;
    gameState: Record<string, GameStateItem>;
}

export interface GameStateItem {
    id: string;
    map: string;
    name: string;
    speedModifier: number;
    x: number;
    y: number;
}
