import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChatState } from '../../_data/models/chat';

const initialState: IChatState = {
    allChatsList: [
        {
            name: '',
            id: 0,
            userMessages: [],
            botsMessages: [],
        },
    ],
    activeChat: {},
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addNewChat(state, action: PayloadAction<string>) {
            state.allChatsList.push({
                name: action.payload,
                botsMessages: [],
                userMessages: [],
                id: state.allChatsList.length,
            });
        },
        setActiveChat(state, action: PayloadAction<number>) {
            state.activeChat = state.allChatsList[action.payload];
        },
    },
});

export default chatSlice.reducer;
