import { FooterLinks } from "@/components/FooterLinks";
import { HeaderSearch } from "@/components/HeaderSearch";

interface AppLayoutProps {
  children: React.ReactNode;
}
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <section>
      <HeaderSearch />
      {children}
      <FooterLinks />
    </section>
  );
}
