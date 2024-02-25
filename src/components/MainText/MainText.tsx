import React, { useState } from 'react';
import style from './MainText.module.scss';
import Button from '../Button/btn';
import ChatCreationMenu from '../ChatCreationMenu/ChatCreationMenu';

import { useDispatch } from 'react-redux';
import { chatSlice } from '../../store/redusers/chatReducer';
import { AppDispatch } from '../../store/store';

interface Iprops {
    setShowChatCreationMenu: (x: boolean) => void;
    showChatCreationMenu: boolean;
}

const MainText: React.FC<Iprops> = ({ setShowChatCreationMenu, showChatCreationMenu }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        setShowChatCreationMenu(!showChatCreationMenu);
    };

    return (
        <>
            <div className={style.mainWrapper}>
                <div className={style.headerSelectionTextWrapper}>
                    <p className={style.headerText}>Чатик</p>
                    <Button
                        children='ВСЕ ЧАТЫ'
                        onClick={() => handleClick()}
                        className={style.allChatsShowBtn}
                    />
                </div>
                <div className={style.titleWrapper}>
                    <p className={style.headerText}>У вас нет ни одного чата</p>
                </div>
            </div>
        </>
    );
};

export default MainText;
