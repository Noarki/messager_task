import React from 'react';
import style from './MessageBubble.module.scss';

interface IProps {
    bubbleStylisation?: string;
}

const MessageBubble: React.FC<IProps> = ({ bubbleStylisation }) => {
    return (
        <div className={style.mainWrapper}>
            <div className={style.messageUserBubbleWrapper}>
                <p className={style.messageText}>
                    {' '}
                    Здесь будет отображаться ваше сообщение Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Dolore deserunt animi molestiae hic quidem, itaque ipsa tenetur odit
                    assumenda debitis voluptatum adipisci reiciendis libero inventore mollitia! Rerum eveniet
                    reiciendis quas.
                </p>
                <p className={style.messageData}> 20:00</p>
            </div>
        </div>
    );
};

export default MessageBubble;
