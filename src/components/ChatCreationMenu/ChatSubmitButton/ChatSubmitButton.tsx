import React from 'react';
import style from './ChatSubmitButton.module.scss';
import Button from '../../Button/btn';

interface Iprops {
    chatName: string;
    onClick: () => void;
    showMessageWindow: boolean;
    setShowMessageWindow: (x: boolean) => void;
}

const ChatSubmitButton: React.FC<Iprops> = ({ chatName, onClick }) => {
    return (
        <Button className={style.ChatSubmitButton} onClick={onClick}>
            {chatName}
        </Button>
    );
};

export default ChatSubmitButton;
