import { ReactNode } from "react";
import IconClose from "./icons/IconClose";
import IconAdd from "./icons/IconAdd";
import { SidebarButton } from "./SidebarButton";
import IconTrash from "./icons/IconTrash";
import ToggleSwitch from "./ToogleTheme";
import IconWindProf from "./icons/IconWindProf";

type Props = {
    children: ReactNode;
    open: boolean;
    onNewTranslate: () => void;
    onClear: () => void;
    onClose: () => void;
}

export const Sidebar = ({ open, onClose, onClear, onNewTranslate, children }: Props) => {
    return (
        <section className={`fixed left-0 top-0 bottom-0 text-black dark:text-white 
        ${open ? 'w-screen bg-light-gray/75' : 'w-0'} md:w-64 md:static`}>
            <div className={`transition-all duration-200 flex h-screen ${open ? 'm-0' : '-ml-96'} md:ml-0`}>
                <div className="flex flex-col w-64 p-2 bg-grey-100 dark:bg-slate-800">
                    <div className="mb-5 mt-2 flex gap-5 justify-between">
                        <div className="flex items-center">
                            <IconWindProf width={50} height={50} />
                            WindProf
                        </div>
                        <ToggleSwitch />
                    </div>
                    <div onClick={onNewTranslate} className="flex items-center justify-center p-3 rounded-md text-sm cursor-pointer border  bg-blue-400 text-white border-blue-200/20 hover:bg-blue-800 dark:bg-transparent dark:border-white/20 dark:hover:bg-slate-500/20">
                        <IconAdd width={16} height={16} className="mr-3"/>
                        Nova tradução
                    </div>

                    <nav className="flex-1 pt-2 overflow-y-auto">
                        {children}
                    </nav>

                    <div className="border-t border-slate-700 dark:border-slate-600 pt-2">
                        <SidebarButton 
                            icon={<IconTrash width={16} height={16} />}
                            label="Limpar traduções"
                            onCllick={onClear}
                        />
                    </div>

                </div>
                <div onClick={onClose} className="flex justify-center items-center w-10 h-10 cursor-pointer md:hidden">
                    <IconClose width={24} height={24}/>
                </div>
            </div>
        </section>
    );
}