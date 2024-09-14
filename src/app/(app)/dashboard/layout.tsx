import { Metadata } from "next";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Vitrine-ISPB | Página inicial",
  description: "Page to user creates your account on the website.",
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <section className="pt-20 p-3">{children}</section>;
}
