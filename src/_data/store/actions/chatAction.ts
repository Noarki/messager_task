import { createAsyncThunk } from '@reduxjs/toolkit';
import { chatSlice } from '../redusers/chatReducer';
import { AppDispatch, AppState } from '../store';

// export const ChatCreationMenuShow = () => (dispatch: AppDispatch) => {
//     dispatch(chatSlice.actions.changeChatCreationMenuShow());
// };

export const addChatName = (name: string) => (dispatch: AppDispatch, payload: AppState) => {};

export const setActiveChat = (key: number) => (dispatch: AppDispatch, payload: AppState) => {};

// export const sendUserMessage =
//     (message: string, date: string) => (dispatch: AppDispatch, getState: AppState) => {
//         const { activeChat } = getState().chat;

//         if (activeChat) {
//             // return chatSlice.actions.userMessages([...activeChat.userMessages, message]);
//             return dispatch(
//                 chatSlice.actions.sendUserMessage({
//                     ...activeChat,
//                     userMessages: [...activeChat.userMessages, message],
//                     userMessagesDates: [...activeChat.userMessagesDates, date],
//                     botsMessages: [...activeChat.botsMessages, message],
//                 })
//             );
//         }
//     };

// export const addBotsResponse = () => (dispatch: AppDispatch, getState: AppState) => {
//     const { activeChatId } = getState().chat;

//     if (activeChatId) {
//         return dispatch(
//             chatSlice.actions.addBotsResponse({
//                 ...activeChat,
//                 botsResponces: [...activeChat.botsResponces, ...activeChat.botsMessages],
//                 botsMessages: [],
//             })
//         );
//     }
// };

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
                            id: 'user',
                            date: date,
                            message: message,
                        },
                    ],
                };
            }
            return chat as any;
        });

        dispatch(chatSlice.actions.sendMessage(chatChange));
    };

export const sendBotsResponse =
    (message: string, date: string) => (dispatch: AppDispatch, getState: AppState) => {
        const { allChatsList, activeChatId } = getState().chat;

        const addBotsMessage = allChatsList.map((chat) => {
            if (chat.id === activeChatId) {
                return {
                    ...chat,
                    messages: [
                        ...chat.messages,
                        {
                            id: 'bot',
                            date: date,
                            message: 'Вы написали ' + message,
                        },
                    ],
                };
            }
            return chat as any;
        });
        dispatch(chatSlice.actions.sendResponse(addBotsMessage));
    };
