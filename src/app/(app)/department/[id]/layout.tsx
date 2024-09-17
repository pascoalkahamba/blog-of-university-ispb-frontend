import { Metadata } from "next";

interface DepartmentLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Vitrine-ISPB | Departamento",
  description: "Page to user creates your account on the website.",
};

export default function DepartmentLayout({ children }: DepartmentLayoutProps) {
  return <section className="pt-20 p-3 w-full">{children}</section>;
}
