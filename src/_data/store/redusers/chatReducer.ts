import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChat, IChatState, IMessage } from '../../models/chat';

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
                        id: state.allChatsList.length + 1,
                        name: action.payload,
                        messages: [],
                    },
                    ...state.allChatsList,
                ],
            };
        },
        setActiveChat(state, action: PayloadAction<number>) {
            return {
                ...state,
                activeId: action.payload,
            };
        },
        setMessage(state, action: PayloadAction<IChat[]>) {
            return {
                ...state,
                allChatsList: action.payload,
            };
        },
        // setActiveChat(state, action: PayloadAction<IChat>) {
        //     return { ...state, activeChat: action.payload };
        // },
        // sendUserMessage(state, action: PayloadAction<IChat>) {
        //     return {
        //         ...state,
        //         activeChat: action.payload,
        //     };
        // },
        // addBotsResponse(state, action: PayloadAction<IChat>) {
        //     return {
        //         ...state,
        //         activeChat: action.payload,
        //     };
        // },
    },
});

export default chatSlice.reducer;
