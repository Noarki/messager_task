import React, { useState } from 'react';
import style from './ChatCreationPanel.module.scss';
import Button from '../../Button/btn';
import ChatSubmitButton from '../ChatSubmitButton/ChatSubmitButton';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../_data/hooks/redux';
import { chatSlice } from '../../../_data/store/redusers/chatReducer';
import { AppDispatch } from '../../../_data/store/store';

interface Iprops {
    setDisplayCreationPanel: (x: boolean) => void;
    showMessageWindow: boolean;
    setShowMessageWindow: (x: boolean) => void;
}

const ChatCreationPanel: React.FC<Iprops> = ({
    setDisplayCreationPanel,
    showMessageWindow,
    setShowMessageWindow,
}) => {
    const { addNewChat } = chatSlice.actions;

    const dispatch = useDispatch<AppDispatch>();

    const [chatName, setChatName] = useState('');

    const { allChatsList } = useAppSelector((state) => state.chat);

    const handleChatNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== '') setChatName(e.target.value);
    };

    const handleClick = () => {
        setDisplayCreationPanel(false);
        dispatch(addNewChat(chatName));

        // return (
        //     <ChatSubmitButton
        //         chatName={chatName}
        //         showMessageWindow={showMessageWindow}
        //         setShowMessageWindow={setShowMessageWindow}
        //     />
        // );
    };

    return (
        <div className={style.ChatCreationPanelWrapper}>
            <input className={style.chatCreationNameInput} onChange={handleChatNameInput} />
            <Button className={style.creationSubmitButton} children='ок' onClick={handleClick} />
        </div>
    );
};

export default ChatCreationPanel;
