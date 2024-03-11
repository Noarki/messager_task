import React from 'react';
import style from './MessageBubble.module.scss';
import { IMessages } from '../../../_data/models/chat';

interface IProps {
    userChatMessages?: IMessages[];
}

const MessageBubbleList: React.FC<IProps> = ({ userChatMessages }) => {
    return (
        <div className={style.mainWrapper}>
            {userChatMessages?.map((messageData) => (
                <div
                    className={
                        messageData.id === 'user'
                            ? style.positionControlerTypeUser
                            : style.positionControlerTypeBot
                    }
                >
                    <div
                        className={
                            messageData.id === 'user'
                                ? style.messageUserBubbleWrapperUser
                                : style.messageUserBubbleWrapperBot
                        }
                    >
                        <p className={style.messageText}> {messageData.message} </p>
                        <p className={style.dataText}>{messageData.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageBubbleList;
