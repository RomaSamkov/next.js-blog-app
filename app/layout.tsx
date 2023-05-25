import MyProfilePic from "./components/MyProfilePic";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roma RS's Blog",
  description: "Created by Roma RS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="bg-slate-800">
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
