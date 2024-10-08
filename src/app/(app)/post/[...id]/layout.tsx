import { Metadata } from "next";
import { Inter } from "next/font/google";

interface PostLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Especial Post",
  description: "Generated by create next app",
};

export default function PostLayout({ children }: PostLayoutProps) {
  return <section className="pt-20 p-3">{children}</section>;
}
