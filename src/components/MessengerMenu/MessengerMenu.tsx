import { useAppSelector } from '../../_data/models/hooks/redux';
import Button from '../Button/btn';
import MessageBubble from './MessageBubble/MessageBubble';
import style from './MessengerMenu.module.scss';

interface Iprops {}

const MessengerMenu = () => {
    const handleClick = () => {};

    const {} = useAppSelector((state) => state.chat);

    return (
        <div className={style.messengerMenuWrapper}>
            <p className={style.messengerMenuText}>Тут будет название чата</p>
            <div className={style.mainWrapper}>
                <MessageBubble />
                <div className={style.messageSubmitWrapper}>
                    <form>
                        <input
                            name={'userMassages'}
                            className={style.messageInput}
                            placeholder={'Напишите что-нибудь'}
                        />
                        <Button children='ОТПРАВИТЬ' onClick={handleClick} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MessengerMenu;
