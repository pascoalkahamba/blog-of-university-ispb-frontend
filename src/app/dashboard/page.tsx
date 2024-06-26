import { CardsCarousel } from "@/components/CardsCarousel";
import CardsPost from "@/components/CardsPost";

export default function Dashboard() {
  return (
    <section>
      <CardsCarousel />
      <CardsPost />
      <CardsPost />
      <CardsPost />
    </section>
  );
}
