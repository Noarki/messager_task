import { IChat } from '../_data/models/chat';

export const getActiveChatById = (allChatsList: IChat[], activeChatId: number | undefined) =>
    allChatsList.find((chat) => chat.id === activeChatId);
