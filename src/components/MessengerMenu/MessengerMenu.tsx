import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../_data/hooks/redux';
import Button from '../Button/btn';

import style from './MessengerMenu.module.scss';
import { IChat } from '../../_data/models/chat';
import MessageBubbleList from './MessageBubble/MessageBubble';
import { sendBotsResponse, sendUserMessage } from '../../_data/store/actions/chatAction';
import moment from 'moment';

interface Iprops {
    chat: IChat;
}

const MessengerMenu: React.FC<Iprops> = (chat) => {
    const {} = useAppSelector((state) => state.chat);

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

            setTimeout(() => {
                dispatch(sendBotsResponse(userMessage, getMessageTime()));
            }, 3000);
        }
        setUserMessage('');
    };

    return (
        <div className={style.messengerMenuWrapper} onClick={(e) => e.stopPropagation()}>
            <p className={style.messengerMenuText}>{chat.chat.name}</p>
            <div className={style.mainWrapper}>
                {/* <div className={style.ППП}>
                    {chat.chat.messages.map((messages) => (
                        <>
                            <p>{messages.id}</p>
                            <p>{messages.message}</p>
                        </>
                    ))}
                </div> */}

                <MessageBubbleList userChatMessages={chat.chat.messages} />

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
