export interface IChatState {
    allChatsList: IChat[];
    activeChat?: IChat;
}

export interface IChat {
    name: string;
    id: number;

    userMessages: string[];
    userMessagesDates: string[];
    botsResponces: string[];

    chatResult?: IMessages[];
    botsMessages: string[];
}

export interface IMessages {
    id: string;
    message: string;
    date: string;
}
