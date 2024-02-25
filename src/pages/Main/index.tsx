import React, { useState } from 'react';
import MainText from '../../components/MainText/MainText';
import ChatCreationMenu from '../../components/ChatCreationMenu/ChatCreationMenu';
import MessengerMenu from '../../components/MessengerMenu/MessengerMenu';
import style from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { chatSlice } from '../../store/redusers/chatReducer';

function Main() {
    // const { showChatCreationMenu } = useSelector((state: RootState) => state.chat);

    const [showChatCreationMenu, setShowChatCreationMenu] = useState(false);
    const [showMessageWindow, setShowMessageWindow] = useState(false);

    const dispatch = useDispatch();

    const renderCreationMenu = () => {
        if (showChatCreationMenu) {
            return (
                <ChatCreationMenu
                    showMessageWindow={showMessageWindow}
                    setShowMessageWindow={setShowMessageWindow}
                />
            );
        }
    };

    const outclickCreationMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        // Нужно сделать экшн для закрытия окна

        if (showChatCreationMenu) {
            setShowChatCreationMenu(!showChatCreationMenu);
            // dispatch(chatSlice.actions.changeChatCreationMenuShow());
            console.log('aboba');
        }
    };

    const renderMessangerWindow = () => {
        if (showMessageWindow) return <MessengerMenu />;
    };

    return (
        <div className={style.mainWrapper} onClick={outclickCreationMenu}>
            <MainText
                setShowChatCreationMenu={setShowChatCreationMenu}
                showChatCreationMenu={showChatCreationMenu}
            />
            {renderCreationMenu()}
            {renderMessangerWindow()}
        </div>
    );
}

export default Main;
