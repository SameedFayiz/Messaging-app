"use client";
import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import ChatsSection from "@/components/chatsSection/chatsSection";
import ChatArea from "@/components/chatArea/chatArea";

const Page = () => {
  return (
    <main className="flex min-h-full">
      <div className="w-max">
        <SideBar></SideBar>
      </div>
      <div className="w-[25%]">
        <ChatsSection></ChatsSection>
      </div>
      <div className="flex-1">
        <ChatArea></ChatArea>
      </div>
    </main>
  );
};

export default Page;
