import React from 'react';
import style from './ChatSubmitButton.module.scss';
import Button from '../../Button/btn';
import { useAppDispatch } from '../../../_data/models/hooks/redux';
import { addChatName, setActiveChat } from '../../../store/actions/chatAction';

interface Iprops {
    chatName: string;
    showMessageWindow: boolean;
    setShowMessageWindow: (x: boolean) => void;
}

const ChatSubmitButton: React.FC<Iprops> = ({ chatName, showMessageWindow, setShowMessageWindow }) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        setShowMessageWindow(!showMessageWindow);
    };

    return <Button className={style.ChatSubmitButton} onClick={handleClick} children={chatName} />;
};

export default ChatSubmitButton;
