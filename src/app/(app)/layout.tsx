import FooterMain from "@/components/FooterMain";
import HeaderMain from "@/components/HeaderMain";

interface LayoutAppProps {
  children: React.ReactNode;
}

export default function LayoutApp({ children }: LayoutAppProps) {
  return (
    <section>
      <HeaderMain />
      <div className="pt-[3rem]">{children}</div>
      <FooterMain />
    </section>
  );
}
