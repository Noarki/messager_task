import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChatState } from '../../_data/models/chat';

const initialState: IChatState = {
    allChatsList: [],
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addNewChat(state, action: PayloadAction<string>) {
            state.allChatsList.push(action.payload);
        },
    },
});

export default chatSlice.reducer;
