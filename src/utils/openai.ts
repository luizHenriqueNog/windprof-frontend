import { ChatMessage } from '@/app/types/ChatMessage';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import axios from 'axios';

export const openai = {
    generate: async (messages: ChatCompletionMessageParam[]) => {
        try {
            const response = await axios.post('http://localhost:5051/translate', {
                messages
            });

            console.log(response.data.answer);

            return response.data.answer;
        } catch(e){
            console.log("ERROR")
            return null;
        }
    },
    translateMessages: (messages: ChatMessage[]): ChatCompletionMessageParam[] => {
        return messages.map(message => ({
            role: message.author === "me" ? "user" : "assistant",
            content: message.body
        }));
    }
}