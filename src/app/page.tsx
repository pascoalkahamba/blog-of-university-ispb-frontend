import { ButtonProgress } from "@/components/ButtonProgress";
import { HeaderSearch } from "@/components/HeaderSearch";

export default function Home() {
  return (
    <section className="bg-blue-500">
      <HeaderSearch />
      <p className="text-blue-300">Hello World</p>
      <ButtonProgress />
    </section>
  );
}
