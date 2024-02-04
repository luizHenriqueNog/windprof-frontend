import { ChatMessageInput } from "./ChatMessageInput";

type Props = {
    disabled: boolean;
    onSendMessage: (message: string) => void;
}
export const Footer = ({onSendMessage, disabled}: Props) => {
    return (
        <footer className="w-full pt-2 px-2 pb-10">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput
                    disabled={disabled}
                    onSend={onSendMessage}
                />
            </div>
            {/* <div className="flex items-center justify-center text-sm m-3 text-center">
                Feito por LH <a href="#" className="underline">website aqui</a>
            </div> */}
        </footer>
    );
}