import React from 'react';
import style from './ChatSubmitButton.module.scss';
import Button from '../../Button/btn';
import { useAppDispatch } from '../../../_data/hooks/redux';

interface Iprops {
    chatName: string;
    onClick: () => void;
    // showMessageWindow: boolean;
    // setShowMessageWindow: (x: boolean) => void;
}

const ChatSubmitButton: React.FC<Iprops> = ({ chatName, onClick }) => {
    // const dispatch = useAppDispatch();
    // const handleClick = () => {
    //     setShowMessageWindow(!showMessageWindow);
    // };
    // return <Button className={style.ChatSubmitButton} onClick={handleClick} children={chatName} />;
    return (
        <Button className={style.ChatSubmitButton} onClick={onClick}>
            {chatName}
        </Button>
    );
};

export default ChatSubmitButton;
