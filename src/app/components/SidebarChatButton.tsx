import { useState } from "react";
import { Chat } from "../types/Chat";
import IconChatLeft from "./icons/IconChatLeft";
import IconTrash from "./icons/IconTrash";
import IconEdit from "./icons/IconEdit";
import IconCheck from "./icons/IconCheck";
import IconClose from "./icons/IconClose";

type Props = {
    key: string;
    chatItem: Chat;
    active: boolean;
    onClick: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void; 
}

export const SidebarChatButton = ({ key, chatItem, active, onClick, onDelete, onEdit }: Props) => {
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [titleInput, setTitleInput] = useState(chatItem.title);

    // Lida com a ação de clicar no botão do chat.
    const handleClickButton = () => {
        if (!deleting && !editing) {
            onClick(chatItem.id);
        }
    }

    // Lida com a confirmação de ações (excluir ou editar).
    const handleConfirmButton = () => {
        if (deleting) onDelete(chatItem.id);
        if (editing && titleInput.trim() !== "") {
            onEdit(chatItem.id, titleInput.trim());
        }
        setDeleting(false);
        setEditing(false);
    }

    // Lida com o cancelamento de ações (excluir ou editar).
    const handleCancelButton = () => {
        setDeleting(false);
        setEditing(false);
    }

    return (
        <div onClick={handleClickButton} className={`flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-slate-500/10 ${active ? "bg-slate-500/20" : "bg-transparent"}`}>
            <div className="mr-3">
                {/* Alterna entre ícone de chat e ícone de lixeira */}
                {!deleting ? <IconChatLeft width={16} height={16} /> : <IconTrash width={16} height={16} />}
            </div>
            <div className="flex-1 text-sm overflow-x-hidden">
                {/* Campo de edição do título do chat */}
                {editing ? (
                    <input
                        className="w-full bg-transparent text-sm outline-none border border-blue-500"
                        value={titleInput}
                        onChange={e => setTitleInput(e.target.value)}
                    />
                ) : (
                    <div className="border border-transparent truncate">
                        {/* Exibe título do chat ou opção para excluir */}
                        {!deleting ? chatItem.title : `Excluir "${chatItem.title}"`}
                    </div>
                )}
            </div>
            {/* Opções de edição e exclusão para chat ativo */}
            {active && !deleting && !editing && (
                <div className="flex">
                    <div onClick={() => setEditing(true)} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                        <IconEdit width={16} height={16} />
                    </div>
                    <div onClick={() => setDeleting(true)} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                        <IconTrash width={16} height={16} />
                    </div>
                </div>
            )}
            {/* Opções de confirmar ou cancelar ação */}
            {(deleting || editing) && (
                <div className="flex">
                    <div onClick={handleConfirmButton} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                        <IconCheck width={16} height={16} />
                    </div>
                    <div onClick={handleCancelButton} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                        <IconClose width={16} height={16} />
                    </div>
                </div>
            )}
        </div>
    )
}
