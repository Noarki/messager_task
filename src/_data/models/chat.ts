export interface IChatState {
    allChatsList: IChat[];
    activeChat?: IChat;
}

export interface IChat {
    name: string;
    id: number;
    userMessages?: string[];
    botsMessages?: string[];
}
