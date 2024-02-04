import { ChatMessage } from "../types/ChatMessage"
import IconTailwindCss from "./icons/IconTailwind";
import IconUser from "./icons/IconUser";

type Props = {
    item: ChatMessage
}

export const ChatMessageItem = ({ item }: Props) => {
    return (
        <div className={`pt-3`}>
            <div className={`max-w-4xl m-auto flex items-start p-3 rounded-lg text-sm ${item.author === "ai" ? "bg-slate-100 text-slate-950 dark:bg-white/5 dark:text-white" : "bg-slate-200 text-slate-950 dark:bg-slate-950 dark:text-white" }`}>
                <div className={`w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded-full ${item.author === "ai" ? "bg-blue-600" : "bg-orange-600" }`}>
                    {item.author === "me" && <IconUser width={24} height={24}/>}
                    {item.author === "ai" && <IconTailwindCss width={24} height={24}/>}
                </div>
                <div className="flex-1 text-base whitespace-pre-wrap">
                    {item.body}
                </div>
            </div>
        </div>
    );
}