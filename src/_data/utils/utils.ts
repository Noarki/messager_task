import { IChat } from '../models/chat';
import botsAnswers from '../botsAnswers.json';

export const getActiveChatById = (allChatsList: IChat[], activeChatId: number | undefined) =>
    allChatsList.find((chat) => chat.id === activeChatId);

export const getAnswer = () => {
    let randomAnswerIndex = Math.floor(Math.random() * botsAnswers.answer.length);
    console.log(randomAnswerIndex);

    return botsAnswers.answer[randomAnswerIndex];
};
