import React from 'react';
import style from './MessageBubble.module.scss';

interface IProps {
    bubbleStylisation?: string;
    userChat?: string[];
    userDates?: string[];
    botResponses?: string[];
}

const MessageBubbleList: React.FC<IProps> = ({ userChat, userDates, botResponses }) => {
    return (
        <div className={style.mainWrapper}>
            {userChat?.map((message, index) => (
                <div className={style.positionHelperWrap}>
                    <div className={style.invisibleBlock}></div>
                    <div className={style.messageUserBubbleWrapper}>
                        <p className={style.messageText}> {message} </p>
                        {userDates && <p className={style.messageData}> {userDates[index]} </p>}
                    </div>
                </div>
            ))}

            {botResponses?.map((response) => (
                <div>
                    <p>{response}</p>
                </div>
            ))}
            {/* <div className={style.messageUserBubbleWrapper}>
                <p className={style.messageText}>
                    Здесь будет отображаться ваше сообщение Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Dolore deserunt animi molestiae hic quidem, itaque ipsa tenetur odit
                    assumenda debitis voluptatum adipisci reiciendis libero inventore mollitia! Rerum eveniet
                    reiciendis quas.
                </p>
                <p className={style.messageData}> 20:00</p>
            </div> */}
        </div>
    );
};

export default MessageBubbleList;
