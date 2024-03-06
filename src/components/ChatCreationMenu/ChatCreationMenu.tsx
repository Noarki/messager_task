import React, { useState } from 'react';
import style from './ChatCreationMenu.module.scss';
import Button from '../Button/btn';
import ChatCreationPanel from './ChatCreationPanel/ChatCreationPanel';
import ChatSubmitButton from './ChatSubmitButton/ChatSubmitButton';

import { useAppDispatch, useAppSelector } from '../../_data/hooks/redux';

import { chatSlice } from '../../_data/store/redusers/chatReducer';
import { IChat } from '../../_data/models/chat';

interface Iprops {
    showMessageWindow: boolean;
    setShowMessageWindow: (x: boolean) => void;
}

const ChatCreationMenu: React.FC<Iprops> = ({ showMessageWindow, setShowMessageWindow }) => {
    const [displayCreationPanel, setDisplayCreationPanel] = useState<boolean>(false);

    const { allChatsList } = useAppSelector((state) => state.chat);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        console.log('Нажатие на создание нового чата');
        setDisplayCreationPanel(true);
    };

    const renderChatCreation = () => {
        if (displayCreationPanel)
            return (
                <ChatCreationPanel
                    setDisplayCreationPanel={setDisplayCreationPanel}
                    showMessageWindow={showMessageWindow}
                    setShowMessageWindow={setShowMessageWindow}
                />
            );
    };

    const handleSetActiveChat = (chat: IChat) => {
        dispatch(chatSlice.actions.setActiveChat(chat));
    };

    let renderChatNameButtons = () => {
        return allChatsList.map((obj) => (
            <ChatSubmitButton
                chatName={obj.name}
                key={obj.id}
                onClick={() => handleSetActiveChat(obj)}
                showMessageWindow={showMessageWindow}
                setShowMessageWindow={setShowMessageWindow}
            />
        ));
    };

    return (
        <div className={style.mainWrapper} onClick={(e) => e.stopPropagation()}>
            <div className={style.chatSelectionWrapper}>
                <div className={style.chatSelectionMenu}>
                    {renderChatCreation()}
                    {renderChatNameButtons()}
                </div>

                <Button
                    className={style.newChatCreationBtn}
                    children='СОЗДАТЬ НОВЫЙ ЧАТ'
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default ChatCreationMenu;
