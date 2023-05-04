export interface GatherModManager {
    websockets: WebSocket[];
    functions: Record<string, (...args: any[]) => any>;
}
