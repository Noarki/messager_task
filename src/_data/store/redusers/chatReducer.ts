import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChat, IChatState, IMessages } from '../../models/chat';

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
                        id: state.allChatsList.length,
                        name: action.payload,
                        messages: [],
                    },
                    ...state.allChatsList,
                ],
            };
        },

        setActiveChat(state, action: PayloadAction<number>) {
            return { ...state, activeChatId: action.payload };
        },

        sendMessage(state, action: PayloadAction<IChat[]>) {
            return {
                ...state,
                allChatsList: action.payload,
            };
        },

        sendResponse(state, action: PayloadAction<IChat[]>) {
            return {
                ...state,
                allChatsList: action.payload,
            };
        },
    },
});

export default chatSlice.reducer;
