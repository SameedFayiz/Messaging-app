"use client";

import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/lib/authContext";
import { userSignOut } from "@/lib/firebase";

const MyHeader = () => {
  const [user, setUser] = useContext(AuthContext);
  useEffect(() => {}, [user]);
  return (
    <section className="w-full h-[8vh] bg-blue-600 text-white">
      {user?.uid}
      <button
        className="p-4 bg-red-700 text-white"
        onClick={() => {
          userSignOut();
          setUser(null);
        }}
      >
        logout
      </button>
    </section>
  );
};

export default MyHeader;
