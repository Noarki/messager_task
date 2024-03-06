import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChat, IChatState } from '../../models/chat';

const initialState: IChatState = {
    allChatsList: [],
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addNewChat(state, action: PayloadAction<string>) {
            return {
                ...state,
                allChatsList: [
                    {
                        name: action.payload,
                        botsMessages: [],
                        botsResponces: [],
                        userMessages: [],
                        userMessagesDates: [],
                        id: state.allChatsList.length,
                    },
                    ...state.allChatsList,
                ],
            };
        },
        setActiveChat(state, action: PayloadAction<IChat>) {
            return { ...state, activeChat: action.payload };
        },
        sendUserMessage(state, action: PayloadAction<IChat>) {
            return {
                ...state,
                activeChat: action.payload,
            };
        },
        addBotsResponse(state, action: PayloadAction<IChat>) {
            return {
                ...state,
                activeChat: action.payload,
            };
        },
    },
});

export default chatSlice.reducer;
