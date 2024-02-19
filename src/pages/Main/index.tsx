import React from 'react';
import MainText from '../../components/MainText/MainText';
import ChatCreationMenu from '../../components/ChatCreationMenu/ChatCreationMenu';
import MessengerMenu from '../../components/MessengerMenu/MessengerMenu';
import style from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ChatCreationMenuShow } from '../../store/actions/chatAction';
import { chatSlice } from '../../store/redusers/chatReducer';

function Main() {
    const { showChatCreationMenu } = useSelector((state: RootState) => state.chat);
    const dispatch = useDispatch();

    const renderCreationMenu = () => {
        if (showChatCreationMenu) {
            return <ChatCreationMenu />;
        }
    };

    const outclickCreationMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        // Нужно сделать экшн для закрытия окна

        if (showChatCreationMenu) {
            dispatch(chatSlice.actions.changeChatCreationMenuShow());
            console.log('aboba');
        }
    };

    return (
        <div className={style.mainWrapper} onClick={outclickCreationMenu}>
            <MainText />
            {renderCreationMenu()}
            <MessengerMenu />
        </div>
    );
}

export default Main;
