import React from 'react';
import style from './MainText.module.scss';
import Button from '../Button/btn';
import ChatCreationMenu from '../ChatCreationMenu/ChatCreationMenu';
import { ChatCreationMenuShow } from '../../store/actions/chatAction';
import { useDispatch } from 'react-redux';
import { chatSlice } from '../../store/redusers/chatReducer';
import { AppDispatch } from '../../store/store';

const MainText: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        // dispatch(chatSlice.actions.changeChatCreationMenuShow());
        dispatch(ChatCreationMenuShow());
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
