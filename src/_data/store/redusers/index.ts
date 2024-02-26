import { combineReducers } from '@reduxjs/toolkit';
import chat from './chatReducer';

export const rootReducer = combineReducers({
    chat,
});
