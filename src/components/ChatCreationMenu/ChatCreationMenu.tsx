import React from 'react';
import style from './ChatCreationMenu.module.scss';
import Button from '../Button/btn';
import ChatCreationPanel from './ChatCreationPanel/ChatCreationPanel';
import ChatSubmitButton from './ChatSubmitButton/ChatSubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { chatSlice } from '../../store/redusers/chatReducer';
import { RootState } from '../../store/store';

const ChatCreationMenu: React.FC = () => {
    const { showNewChatCreationPanel } = useSelector((state: RootState) => state.chat);

    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Нажатие на создание нового чата');
        e.stopPropagation();
        dispatch(chatSlice.actions.changeNewChatCreationPanel());
    };

    const renderChatCreation = () => {
        if (showNewChatCreationPanel) return <ChatCreationPanel />;
    };

    return (
        <div className={style.mainWrapper}>
            <div className={style.chatSelectionWrapper}>
                <div className={style.chatSelectionMenu}>
                    <ChatSubmitButton />
                    <ChatCreationPanel />
                    {renderChatCreation()}
                </div>

                <Button
                    className={style.newChatCreationBtn}
                    children='СОЗДАТЬ НОВЫЙ ЧАТ'
                    onClick={() => handleClick}
                />
            </div>
        </div>
    );
};

export default ChatCreationMenu;
