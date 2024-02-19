import React from 'react';
import style from './ChatCreationPanel.module.scss';
import Button from '../../Button/btn';

const ChatCreationPanel = () => {
    return (
        <div className={style.ChatCreationPanelWrapper}>
            <input className={style.chatCreationNameInput} />
            <Button className={style.creationSubmitButton} children='ок' />
        </div>
    );
};

export default ChatCreationPanel;
