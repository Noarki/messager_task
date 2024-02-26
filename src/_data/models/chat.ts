export interface IChatState {
    allChatsList: [
        {
            name: string;
            id: number;
            userMessages?: string[];
            botsMessages?: string[];
        }
    ];
    activeChat?: {
        name?: string;
        id?: number;
        userMessages?: string[];
        botsMessages?: string[];
    };
}
