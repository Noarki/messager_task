export interface IChatState {
    allChatsList: IChat[];
    activeChatId?: number;
}

export interface IChat {
    name: string;
    id: number;
    messages: IMessages[];
}

export interface IMessages {
    // id: EMessageIdType;
    id: 'user' | 'bot';
    message: string;
    date: string;
}

// enum EMessageIdType {
//     user = 'user',
//     bot = 'bot',
// }
