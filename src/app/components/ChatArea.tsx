import { useEffect, useRef } from "react";
import { Chat } from "../types/Chat";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatMessageLoading } from "./ChatMessageLoading";
import { ChatPlaceholder } from "./ChatPlaceholder";

type Props = {
    chat: Chat | undefined;
    loading: boolean;
}

export const ChatArea = ({ chat, loading }: Props) => {
    const scrollArea = useRef<HTMLDivElement>(null);

    // Efeito para rolar automaticamente para a última mensagem quando novas mensagens são carregadas ou quando o estado de carregamento muda.
    useEffect(() => {
        scrollArea.current?.scrollTo(0, scrollArea.current?.scrollHeight);
    }, [loading, chat?.messages.length])

    return (
        <section ref={scrollArea} className="flex-auto h-0 overflow-y-scroll">
            {/* Exibe um placeholder se não houver chat selecionado */}
            {!chat && <ChatPlaceholder />}
            
            {/* Renderiza as mensagens do chat, se houver */}
            {chat && chat.messages.map(item => (
                <ChatMessageItem 
                    key={item.id}
                    item={item}
                />
            ))}

            {/* Exibe o indicador de carregamento enquanto carrega as mensagens */}
            {loading && <ChatMessageLoading />}
        </section>
    )
}
