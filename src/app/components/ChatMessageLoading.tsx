import IconTailwindCss from "./icons/IconTailwind";

export const ChatMessageLoading = () =>{
    return (
        <div className="py-5">
            <div className="max-w-4xl m-auto flex items-center p-3 rounded-lg bg-slate-100 text-slate-950 dark:bg-white/5 dark:text-white">
                <div className="w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded bg-blue-600">
                    <IconTailwindCss width={24} height={24} />
                </div>
                <div className="flex-1 text-base whitespace-pre-wrap">
                    <div className="w-1 h-4 bg-slate-300 animate-blink"></div>
                </div>
            </div>
        </div>
    );
}