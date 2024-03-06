import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../_data/hooks/redux';
import Button from '../Button/btn';

import style from './MessengerMenu.module.scss';
import { IChat } from '../../_data/models/chat';
import MessageBubbleList from './MessageBubble/MessageBubble';
import { addBotsResponse, sendUserMessage } from '../../_data/store/actions/chatAction';
import moment from 'moment';

interface Iprops {}

const MessengerMenu = () => {
    const { activeChat } = useAppSelector((state) => state.chat);

    const [userMessage, setUserMessage] = useState('');

    const dispatch = useAppDispatch();

    const getMessageTime = () => {
        const date = moment().format('hh:mm');
        return date;
    };

    const handleMessageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
    };

    const handleClick = () => {
        if (userMessage !== '') {
            dispatch(sendUserMessage(userMessage, getMessageTime()));
        }
        setUserMessage('');

        setTimeout(() => {
            dispatch(addBotsResponse());
        }, 5000);
    };

    return (
        <div className={style.messengerMenuWrapper} onClick={(e) => e.stopPropagation()}>
            <p className={style.messengerMenuText}>{String(activeChat?.name)}</p>
            <div className={style.mainWrapper}>
                <MessageBubbleList
                    userChat={activeChat?.userMessages}
                    userDates={activeChat?.userMessagesDates}
                    botResponses={activeChat?.botsResponces}
                />

                <div className={style.messageSubmitWrapper}>
                    <input
                        name={'userMassages'}
                        className={style.messageInput}
                        placeholder={'Напишите что-нибудь'}
                        onChange={handleMessageInput}
                        value={userMessage}
                    />
                    <Button
                        children='ОТПРАВИТЬ'
                        onClick={handleClick}
                        BtnType={'submit'}
                        className={style.submiBtn}
                    />
                </div>
            </div>
        </div>
    );
};

export default MessengerMenu;
