import { Avatar, Button } from "@mui/material";
import React from "react";
import ChatAreaFooter from "./chatAreaFooter";
import ChatText from "./chatText";

const ChatArea = (props) => {
  const clickHandler = () => {};

  return (
    <section className="w-full h-screen flex flex-col" onClick={clickHandler}>
      <div className="h-16 flex items-center p-5 gap-5">
        <Avatar
          sx={{ width: 48, height: 48 }}
          src={props.src ? props.src : ""}
        ></Avatar>
        <div>
          <div className="text-base font-semibold">Sameed Fayiz</div>
          <div className="text-xs">Click to see contact info</div>
        </div>
      </div>
      <ChatText></ChatText>
      <ChatAreaFooter></ChatAreaFooter>
    </section>
  );
};

export default ChatArea;
