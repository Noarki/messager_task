import Button from '../Button/btn';
import MessageBubble from '../MessageBubble/MessageBubble';
import style from './MessengerMenu.module.scss';

const MessengerMenu = () => {
    const handleClick = () => {};

    return (
        <div className={style.messengerMenuWrapper}>
            <p className={style.messengerMenuText}>Тут будет название чата</p>
            <div className={style.mainWrapper}>
                <MessageBubble />
                <div className={style.messageSubmitWrapper}>
                    <input className={style.messageInput} placeholder={'Напишите что-нибудь'} />
                    <Button children='ОТПРАВИТЬ' onClick={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default MessengerMenu;
