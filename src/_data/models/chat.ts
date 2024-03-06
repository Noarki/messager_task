export interface IChatState {
    allChatsList: IChat[];
    activeId?: number;
}

export interface IChat {
    id: number;
    name: string;
    messages: IMessage[];
}

export interface IMessage {
    id: 'user' | 'bot'; // ENUM better
    message: string;
    date: string;
}
