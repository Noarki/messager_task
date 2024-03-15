import { chatSlice } from '../redusers/chatReducer';
import { AppDispatch, AppState } from '../store';
import { getAnswer } from '../../utils/utils';

export const sendUserMessage =
    (message: string, date: string) => (dispatch: AppDispatch, getState: AppState) => {
        const { allChatsList, activeChatId } = getState().chat;

        const chatChange = allChatsList.map((chat) => {
            if (chat.id === activeChatId) {
                return {
                    ...chat,
                    messages: [
                        ...chat.messages,
                        {
                            id: message ? 'user' : 'bot',
                            date: date,
                            message: message ? message : getAnswer(),
                        },
                    ],
                };
            }
            return chat as any;
        });

        dispatch(chatSlice.actions.sendMessage(chatChange));
    };
