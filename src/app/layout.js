import { Inter } from "next/font/google";
import "./globals.css";
import MyHeader from "@/components/header/header";
import AuthProvider from "@/lib/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <MyHeader></MyHeader>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
