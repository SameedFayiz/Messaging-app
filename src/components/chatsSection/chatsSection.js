"use client";

import { Avatar, Button } from "@mui/material";
import React from "react";

const l = [1, 2, 3, 4, 56, 0];

const ChatsSection = (props) => {
  const chatClickHandler = (e) => {
    if (e.target.localName == "div") {
    } else {
    }
    console.log(e.target.localName == "div");
  };
  return (
    <section className="w-full min-h-full divide-y-2 divide-slate-500 bg-white">
      <div className="w-full bg-sky-500">
        <p className="text-sm text-white">Start a new chat</p>
        <Button className="w-full" variant="contained">
          Contained
        </Button>
      </div>
      {l.map((ele, index) => {
        return (
          <div
            key={index}
            className="flex w-full p-3 gap-5 rounded hover:opacity-60"
            onClick={chatClickHandler}
          >
            <div className="flex items-center max-w-fit">
              <Avatar
                onClick={chatClickHandler}
                sx={{ width: 48, height: 48 }}
                src={ele.src ? ele.src : ""}
              ></Avatar>
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="text-base font-semibold">
                {ele.userName ? ele.userName : "Sameed Fayiz"}
              </div>
              <div className="text-sm">
                {ele.unReadMsg ? ele.unReadMsg : "1 new message"}
              </div>
            </div>
            <div className="flex items-center text-xs">
              {ele.lastMsgTime ? ele.lastMsgTime : "00:00 AM"}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ChatsSection;
