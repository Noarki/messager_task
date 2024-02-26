import React, { useState } from 'react';
import style from './ChatCreationMenu.module.scss';
import Button from '../Button/btn';
import ChatCreationPanel from './ChatCreationPanel/ChatCreationPanel';
import ChatSubmitButton from './ChatSubmitButton/ChatSubmitButton';

import { useAppDispatch, useAppSelector } from '../../_data/models/hooks/redux';
import { JsxElement } from 'typescript';

interface Iprops {
    showMessageWindow: boolean;
    setShowMessageWindow: (x: boolean) => void;
}

const ChatCreationMenu: React.FC<Iprops> = ({ showMessageWindow, setShowMessageWindow }) => {
    const [displayCreationPanel, setDisplayCreationPanel] = useState<boolean>(false);

    const { allChatsList } = useAppSelector((state) => state.chat);
    const dispatch = useAppDispatch;

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

    let renderChatNameButtons = () => {
        // allChatsList.map((chatName) => {
        //     return <ChatSubmitButton chatName={chatName} />;
        // });

        // if (allChatsList[0] !== '') {
        //     for (let index = 0; index < allChatsList.length; index++) {
        //         return <ChatSubmitButton chatName={allChatsList[index]} />;
        //     }
        // }

        return allChatsList.map((obj) => (
            <ChatSubmitButton
                chatName={obj.name}
                key={obj.id}
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
