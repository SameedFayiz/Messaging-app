"use client";

import SignIn from "@/components/signIn/signIn";
import SignUp from "@/components/signUp/signUp";
import { useState } from "react";

export default function Home() {
  const [authMethod, setAuthMethod] = useState(false);
  return (
    <main className="flex min-h-[92vh] flex-col items-center justify-center">
      {authMethod ? (
        <SignUp onclick={setAuthMethod}></SignUp>
      ) : (
        <SignIn onclick={setAuthMethod}></SignIn>
      )}
    </main>
  );
}
