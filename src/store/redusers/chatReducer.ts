import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChatState } from '../../_data/models/chat';

const initialState: IChatState = {
    showChatCreationMenu: false,
    showNewChatCreationPanel: false,
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        changeChatCreationMenuShow(state) {
            return { ...state, showChatCreationMenu: !state.showChatCreationMenu };
        },
        changeNewChatCreationPanel(state) {
            return { ...state, showNewChatCreationPanel: true };
        },
    },
});

export default chatSlice.reducer;
