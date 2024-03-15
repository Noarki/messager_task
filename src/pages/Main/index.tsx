import React, { useState } from 'react';
import MainText from '../../components/MainText/MainText';
import ChatCreationMenu from '../../components/ChatCreationMenu/ChatCreationMenu';
import MessengerMenu from '../../components/MessengerMenu/MessengerMenu';
import style from './index.module.scss';

import { useAppSelector } from '../../_data/hooks/redux';
import { getActiveChatById } from '../../_data/utils/utils';

function Main() {
    // const { showChatCreationMenu } = useSelector((state: RootState) => state.chat);

    const [showChatCreationMenu, setShowChatCreationMenu] = useState(false);
    const [showMessageWindow, setShowMessageWindow] = useState(false);
    const { activeChatId, allChatsList } = useAppSelector((state) => state.chat);

    const outclickCreationMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        if (showChatCreationMenu) setShowChatCreationMenu(!showChatCreationMenu);
    };

    const renderActiveChat = () => {
        const activeChat = getActiveChatById(allChatsList, activeChatId);

        if (activeChat) {
            return <MessengerMenu chat={activeChat} />;
        }

        return <></>;
    };

    return (
        <div className={style.mainWrapper} onClick={outclickCreationMenu}>
            {/* <div className={style.invisibleClickScreen}></div> */}
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

            {renderActiveChat()}
        </div>
    );
}

export default Main;
