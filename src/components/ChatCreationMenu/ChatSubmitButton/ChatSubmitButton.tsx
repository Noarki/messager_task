import React from 'react';
import style from './ChatSubmitButton.module.scss';
import Button from '../../Button/btn';

// interface Iprops {
//     children?: String;
//     onClick?: () => void;
// }{ children, onClick }

const handleClick = () => {
    console.log('chat aboba');
};

const ChatSubmitButton: React.FC = () => {
    return <Button children='' className={style.ChatSubmitButton} onClick={() => handleClick} />;
};

export default ChatSubmitButton;
