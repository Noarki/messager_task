import React, { useState } from 'react';
import style from './ChatCreationPanel.module.scss';
import Button from '../../Button/btn';
import ChatSubmitButton from '../ChatSubmitButton/ChatSubmitButton';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { chatSlice } from '../../../store/redusers/chatReducer';

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

    const handleChatNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== '') setChatName(e.target.value);
    };

    const handleClick = () => {
        console.log('Нажата кнопка завершения создания чата');
        setDisplayCreationPanel(false);
        dispatch(addNewChat(chatName));

        return (
            <ChatSubmitButton
                chatName={chatName}
                showMessageWindow={showMessageWindow}
                setShowMessageWindow={setShowMessageWindow}
            />
        );
    };

    return (
        <div className={style.ChatCreationPanelWrapper}>
            <input className={style.chatCreationNameInput} onChange={handleChatNameInput} />
            <Button className={style.creationSubmitButton} children='ок' onClick={handleClick} />
        </div>
    );
};

export default ChatCreationPanel;
