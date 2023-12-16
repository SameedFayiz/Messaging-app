"use client";

import SideBar from "@/components/sideBar/sideBar";
import ChatsSection from "@/components/chatsSection/chatsSection";
import ChatArea from "@/components/chatArea/chatArea";
import { useState } from "react";
import FriendsTab from "@/components/tabs/friendsTab";
import SupportTab from "@/components/tabs/supportTab";
import ProfileTab from "@/components/tabs/profileTab";
import SettingsTab from "@/components/tabs/settingsTab";

const Page = () => {
  const [section, setSection] = useState(0);
  return (
    <main className="flex h-screen">
      <div className="w-max">
        <SideBar onclick={setSection}></SideBar>
      </div>
      {section == 0 ? (
        <>
          <div className="w-[25%]">
            <ChatsSection></ChatsSection>
          </div>
          <div className="flex-1">
            <ChatArea></ChatArea>
          </div>
        </>
      ) : section === 1 ? (
        <FriendsTab></FriendsTab>
      ) : section === 2 ? (
        <SupportTab></SupportTab>
      ) : section === 3 ? (
        <ProfileTab></ProfileTab>
      ) : (
        <SettingsTab></SettingsTab>
      )}
    </main>
  );
};

export default Page;
