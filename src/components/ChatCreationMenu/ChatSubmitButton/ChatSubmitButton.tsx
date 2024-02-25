import React from 'react';
import style from './ChatSubmitButton.module.scss';
import Button from '../../Button/btn';

interface Iprops {
    chatName?: string;

    showMessageWindow: boolean;
    setShowMessageWindow: (x: boolean) => void;
}

const ChatSubmitButton: React.FC<Iprops> = ({ chatName, showMessageWindow, setShowMessageWindow }) => {
    const handleClick = () => {
        setShowMessageWindow(!showMessageWindow);
        console.log(showMessageWindow);
    };

    return <Button className={style.ChatSubmitButton} onClick={handleClick} children={chatName} />;
};

export default ChatSubmitButton;
