import React, { useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { Attachment, InsertEmoticon, Send } from "@mui/icons-material";
const ChatAreaFooter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <section className="w-full flex items-center p-3">
      <div>
        <Button
          id="demo-positioned-button1"
          aria-controls={open ? "demo-positioned-menu1" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Attachment></Attachment>
        </Button>
        <Menu
          id="demo-positioned-menu1"
          aria-labelledby="demo-positioned-button1"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleClose}>Photos and Video</MenuItem>
          <MenuItem onClick={handleClose}>Documents</MenuItem>
        </Menu>
      </div>
      <div>
        <Button
          id="demo-positioned-button2"
          aria-controls={open2 ? "demo-positioned-menu2" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
          onClick={handleClick2}
        >
          <InsertEmoticon></InsertEmoticon>
        </Button>
        <Menu
          id="demo-positioned-menu2"
          aria-labelledby="demo-positioned-button2"
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleClose2}>Emojis</MenuItem>
        </Menu>
      </div>
      <TextField
        className="flex-1"
        id="standard-multiline-flexible"
        placeholder="Type a message"
        maxRows={4}
        multiline
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="send message" edge="end">
                <Send></Send>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </section>
  );
};

export default ChatAreaFooter;
