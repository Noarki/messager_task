import React, { useState } from 'react';
import MainText from '../../components/MainText/MainText';
import ChatCreationMenu from '../../components/ChatCreationMenu/ChatCreationMenu';
import MessengerMenu from '../../components/MessengerMenu/MessengerMenu';
import style from './index.module.scss';

import { useAppSelector } from '../../_data/hooks/redux';

function Main() {
    // const { showChatCreationMenu } = useSelector((state: RootState) => state.chat);

    const [showChatCreationMenu, setShowChatCreationMenu] = useState(false);
    const [showMessageWindow, setShowMessageWindow] = useState(false);
    const { activeChat } = useAppSelector((state) => state.chat);

    const outclickCreationMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        setShowChatCreationMenu(!showChatCreationMenu);
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

            {activeChat && <MessengerMenu />}
        </div>
    );
}

export default Main;
