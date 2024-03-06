import { createAsyncThunk } from '@reduxjs/toolkit';
import { chatSlice } from '../redusers/chatReducer';
import { AppDispatch, AppState } from '../store';
import { IMessage } from '../../models/chat';

// export const ChatCreationMenuShow = () => (dispatch: AppDispatch) => {
//     dispatch(chatSlice.actions.changeChatCreationMenuShow());
// };

// export const addChatName = (name: string) => (dispatch: AppDispatch, payload: AppState) => {};

// export const setActiveChat = (key: number) => (dispatch: AppDispatch, payload: AppState) => {};

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
//     const { activeChat } = getState().chat;

//     if (activeChat) {
//         return dispatch(
//             chatSlice.actions.addBotsResponse({
//                 ...activeChat,
//                 botsResponces: [...activeChat.botsResponces, ...activeChat.botsMessages],
//                 botsMessages: [],
//             })
//         );
//     }
// };

export const setUsereMessage =
    (message: string, date: string) => (dispatch: AppDispatch, getState: AppState) => {
        const { allChatsList, activeId } = getState().chat;

        const chatToChange = allChatsList.map((v) => {
            if (v.id === activeId) {
                return {
                    ...v,
                    messages: [
                        ...v.messages,
                        {
                            id: 'user' as 'user',
                            message: message,
                            date: date,
                        },
                    ],
                };
            }
            return v;
        });

        dispatch(chatSlice.actions.setMessage(chatToChange));
    };

// export const setMessage = (message: IMessage) => (dispatch: AppDispatch, getState: AppState) => {
//     const { allChatsList, activeChat } = getState().chat;

//     const chatToChange = allChatsList.map((v) => {
//         if (v.id === activeChat) {
//             return {
//                 ...v,
//                 messages: [...v.messages, message],
//             };
//         }
//         return v;
//     });

//     dispatch(chatSlice.actions.setMessage(chatToChange));

//     console.log(chatToChange);
// };
