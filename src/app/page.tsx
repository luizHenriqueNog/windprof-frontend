"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { ChatArea } from "./components/ChatArea";
import { Chat } from "./types/Chat";
import { Footer } from "./components/Footer";
import { v4 as uuidv4 } from 'uuid';
import { SidebarChatButton } from "./components/SidebarChatButton";
import { openai } from "@/utils/openai";

const Page = () => {
  // Estados para controle de chats, chat ativo e UI.
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [AILoading, setAILoading] = useState(false);

  // Monitora o chat ativo e atualiza o estado.
  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId))
  }, [chatActiveId, chatList])

  // Carrega resposta da IA quando necessário.
  useEffect(() => {
    if (AILoading) getAIResponse();
  }, [AILoading])

  // Obtém resposta da IA e atualiza a lista de chats.
  const getAIResponse = async () => {
    let chatListNew = [...chatList];
    let chatIndex = chatListNew.findIndex(item => item.id === chatActiveId);
    if (chatIndex > -1) {
      const response = await openai.generate(
        openai.translateMessages(chatListNew[chatIndex].messages)
      );

      if (response) {
        chatListNew[chatIndex].messages.push({
          id: uuidv4(),
          author: "ai",
          body: response
        })
      }
    }
    setChatList(chatListNew);
    setAILoading(false);
  }

  // Funções para controle da interface.
  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  // Limpa a tradução atual.
  const handleClearTranslate = () => {
    if (AILoading) return;

    setChatActiveId('');
    setChatList([]);
  }

  // Inicia uma nova tradução.
  const handleNewTranslate = () => {
    if (AILoading) return;

    setChatActiveId('');
    closeSidebar();
  }

  // Envia uma mensagem, criando um novo chat ou atualizando o existente.
  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
      // Cria um novo chat.
      let newChatId = uuidv4();
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          {
            id: uuidv4(),
            author: "me",
            body: message
          }
        ]
      }, ...chatList]);

      setChatActiveId(newChatId);
    } else {
      // Atualiza chat existente.
      let chatListNew = [...chatList];
      let chatIndex = chatListNew.findIndex(item => item.id === chatActiveId);
      chatListNew[chatIndex].messages.push({
        id: uuidv4(),
        author: "me",
        body: message
      })
      setChatList(chatListNew);
    }
    setAILoading(true);
  }

  // Seleciona um chat da lista.
  const handleSelectChat = (id: string) => {
    if (AILoading) return;

    let item = chatList.find(item => item.id === id);
    if (item) setChatActiveId(item.id);
    closeSidebar();
  }

  // Deleta um chat da lista.
  const handleDeleteChat = (id: string) => {
    let chatListNew = [...chatList];
    let chatIndex = chatListNew.findIndex(item => item.id === id);
    chatListNew.splice(chatIndex, 1);
    setChatList(chatListNew);
    setChatActiveId("");
  }

  // Edita o título de um chat.
  const handleEditChat = (id: string, newTitle: string) => {
    if (newTitle.trim()) {
      let chatListNew = [...chatList];
      let chatIndex = chatListNew.findIndex(item => item.id === id);
      chatListNew[chatIndex].title = newTitle;
      setChatList(chatListNew);
    }
  }

  // Renderização da interface.
  return (
    <main className="flex min-h-screen bg-slate-200 dark:bg-slate-950">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearTranslate}
        onNewTranslate={handleNewTranslate}>
        {chatList.map(item => (
          <SidebarChatButton
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
          />
        ))}
      </Sidebar>
      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={chatActive ? chatActive.title : "Nova tradução"}
          newTranslateClick={handleNewTranslate}
        />

        <ChatArea
          chat={chatActive}
          loading={AILoading}
        />

        <Footer
          onSendMessage={handleSendMessage}
          disabled={AILoading}
        />
      </section>
    </main>
  )
}

export default Page;
