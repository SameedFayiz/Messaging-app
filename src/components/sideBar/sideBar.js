import React from "react";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import { Avatar } from "@mui/material";

const SideBar = (props) => {
  return (
    <section className="flex w-full h-screen flex-col justify-between py-10 px-2 bg-cyan-800">
      <div className="flex flex-col gap-10">
        <div
          onClick={() => {
            props.onclick(0);
          }}
          className="flex justify-center rounded-full p-2 bg-slate-200"
        >
          <ChatRoundedIcon className="text-black" />
        </div>
        <div
          onClick={() => {
            props.onclick(1);
          }}
          className="flex justify-center rounded-full p-2 bg-slate-200"
        >
          <PersonAddAltRoundedIcon className="text-black" />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div
          onClick={() => {
            props.onclick(2);
          }}
          className="flex justify-center rounded-full p-2 bg-slate-200"
        >
          <ContactSupportRoundedIcon className="text-black" />
        </div>
        <div
          onClick={() => {
            props.onclick(3);
          }}
          className="flex justify-center"
        >
          <Avatar>N</Avatar>
        </div>
        <div
          onClick={() => {
            props.onclick(4);
          }}
          className="flex justify-center rounded-full p-2 bg-slate-200"
        >
          <SettingsRoundedIcon className="text-black" />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
