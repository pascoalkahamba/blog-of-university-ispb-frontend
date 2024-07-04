import { CardsCarousel } from "@/components/CardsCarousel";
import CardsPost from "@/components/CardsPost";

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-3 justify-center w-full h-full">
      <CardsCarousel />
      <CardsPost />
      <CardsPost />
      <CardsPost />
    </section>
  );
}
