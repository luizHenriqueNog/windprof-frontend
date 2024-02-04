import { ReactNode } from "react"

type Props = {
    icon: ReactNode;
    label: string;
    onCllick: () => void;
}

export const SidebarButton = ({ icon, label, onCllick } : Props) => {
    return (
        <div onClick={onCllick} className="flex items-center rounded-md p-3 text-sm justify-center cursor-pointer hover:bg-slate-500/20">
            <div className="mr-3">{icon}</div>
            <div className="truncate w-fit">{label}</div>
        </div>
    );
}