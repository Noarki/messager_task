import React, { useState } from 'react';
import MainText from '../../components/MainText/MainText';
import ChatCreationMenu from '../../components/ChatCreationMenu/ChatCreationMenu';
import MessengerMenu from '../../components/MessengerMenu/MessengerMenu';
import style from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { chatSlice } from '../../store/redusers/chatReducer';
import { useAppSelector } from '../../_data/models/hooks/redux';

function Main() {
    // const { showChatCreationMenu } = useSelector((state: RootState) => state.chat);

    const [showChatCreationMenu, setShowChatCreationMenu] = useState(false);
    const [showMessageWindow, setShowMessageWindow] = useState(false);
    const { allChatsList } = useAppSelector((state) => state.chat);

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
        if (showChatCreationMenu) {
            setShowChatCreationMenu(!showChatCreationMenu);

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
