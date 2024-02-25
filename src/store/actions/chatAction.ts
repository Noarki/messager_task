import { createAsyncThunk } from '@reduxjs/toolkit';
import { chatSlice } from '../redusers/chatReducer';
import { AppDispatch, AppState } from '../store';

// export const ChatCreationMenuShow = () => (dispatch: AppDispatch) => {
//     dispatch(chatSlice.actions.changeChatCreationMenuShow());
// };

export const addChatName = (name: string) => (dispatch: AppDispatch, payload: AppState) => {};
