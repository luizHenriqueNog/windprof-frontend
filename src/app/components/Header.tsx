import IconAdd from "./icons/IconAdd";
import IconMenu from "./icons/IconMenu";

type Props = {
    openSidebarClick: () => void;
    title: string;
    newTranslateClick: () => void;
};

export const Header = ({openSidebarClick, title, newTranslateClick} : Props) => {
    return (
        <header className="flex justify-between items-center w-full border-b border-b-slate-600 p-2 md:hidden">
            <div onClick={openSidebarClick}><IconMenu width={24} height={24}/></div>
            <div className="mx-2 truncate">{title}</div>
            <div onClick={newTranslateClick}>
                <IconAdd width={24} height={24} />
            </div>
        </header>
    )
}