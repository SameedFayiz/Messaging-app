import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Avatar, TextField } from "@mui/material";

const allOptions = [];

const ProfileTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full h-full p-16">
      <p className="text-4xl font-bold mb-4">Profile</p>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          borderRadius: 4,
          padding: "20px 20px",
        }}
      >
        <div className="relative bg-teal-800 h-min w-min p-5 rounded-xl">
          <Avatar alt="Remy Sharp" sx={{ width: "200px", height: "200px" }} />
          <input
            type="file"
            className="absolute top-0 overflow-hidden w-full h-full opacity-0"
          />
        </div>
        <div>
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
            Username
            <TextField
              id="input-with-sx"
              variant="standard"
              value={"Sameed fayiz"}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
            Email
            <TextField
              id="input-with-sx"
              variant="standard"
              value={"Sameed fayiz"}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
            Phone number
            <TextField
              id="input-with-sx"
              variant="standard"
              value={"Sameed fayiz"}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default ProfileTab;
