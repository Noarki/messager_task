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
                    ...state.allChatsList,
                    {
                        name: action.payload,
                        botsMessages: [],
                        userMessages: [],
                        id: state.allChatsList.length,
                    },
                ],
            };
        },
        setActiveChat(state, action: PayloadAction<IChat>) {
            return { ...state, activeChat: action.payload };
        },
    },
});

export default chatSlice.reducer;
