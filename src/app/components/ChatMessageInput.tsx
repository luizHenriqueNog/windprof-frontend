import { useRef, useState, KeyboardEvent, useEffect } from "react";
import IconConvertio from "./icons/IconConvert";

type Props = {
    disabled: boolean;
    onSend: (message: string) => void;
}

export const ChatMessageInput = ({ disabled, onSend }: Props) => {
    const [text, setText] = useState('');
    const textEl = useRef<HTMLTextAreaElement>(null);

    // Ajusta a altura do textarea baseado no conteúdo.
    useEffect(() => {
      if (textEl.current) {
        textEl.current.style.height = '0px';
        let scrollHeight = textEl.current.scrollHeight;
        textEl.current.style.height = `${scrollHeight}px`;
      }
    }, [text])

    // Envia a mensagem quando o botão de enviar é clicado.
    const handleSendMessage = () => {
        if (!disabled && text.trim() !== '') {
            onSend(text);
            setText('');
        }
    }

    // Permite enviar a mensagem pressionando 'Enter', sem adicionar nova linha.
    const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.code.toLowerCase() === 'enter' && !event.shiftKey) {
        event.preventDefault();
        handleSendMessage();
      }
    }

    return (
        <div className={`flex border border-slate-800/50 bg-slate-100 dark:bg-slate-800 p-2 rounded-md ${disabled && 'opacity-50'}`}>
            <textarea 
                ref={textEl}
                placeholder="Insira a mensagem..."
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyUp={handleTextKeyUp}
                disabled={disabled}
                className="flex-1 border-0 bg-transparent resize-none outline-none min-h-10 h-10 max-h-48 overflow-y-auto text-blue-100 dark:text-white"
            ></textarea>
            <div 
                onClick={handleSendMessage} 
                className={`self-end p-1 cursor-pointer rounded text-blue-100 dark:text-white ${text.length ? 'opacity-100 hover:bg-black/20' : 'opacity-20'}`}
            >
                <IconConvertio width={24} height={24}/>
            </div>
        </div>
    )
}
