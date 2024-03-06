import React, { useState } from 'react';
import MainText from '../../components/MainText/MainText';
import ChatCreationMenu from '../../components/ChatCreationMenu/ChatCreationMenu';
import MessengerMenu from '../../components/MessengerMenu/MessengerMenu';
import style from './index.module.scss';

import { useAppSelector } from '../../_data/hooks/redux';
import { IChat } from '../../_data/models/chat';
import { useSelector } from 'react-redux';
import { RootState } from '../../_data/store/store';

const getActiveChat = (allChats: IChat[], activeId: number | undefined) =>
    allChats.find((v) => v.id === activeId);

function Main() {
    // const { allChatsList } = useSelector((state: RootState) => state.chat);

    const [showChatCreationMenu, setShowChatCreationMenu] = useState(false);
    const [showMessageWindow, setShowMessageWindow] = useState(false);
    const { allChatsList, activeId } = useAppSelector((state) => state.chat);

    const outclickCreationMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        setShowChatCreationMenu(!showChatCreationMenu);
    };

    const renderMessageMenu = () => {
        console.log(allChatsList, activeId, getActiveChat(allChatsList, activeId));

        const activeChat = getActiveChat(allChatsList, activeId);

        if (activeChat) {
            return <MessengerMenu chat={activeChat} />;
        }

        return <></>;
    };

    return (
        <div className={style.mainWrapper} onClick={outclickCreationMenu}>
            <MainText
                setShowChatCreationMenu={setShowChatCreationMenu}
                showChatCreationMenu={showChatCreationMenu}
            />
            {showChatCreationMenu && (
                <ChatCreationMenu
                    showMessageWindow={showMessageWindow}
                    setShowMessageWindow={setShowMessageWindow}
                />
            )}

            {renderMessageMenu()}
        </div>
    );
}

export default Main;
