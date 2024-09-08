import CardsCarousel from "@/components/CardsCarousel";
import DashboardChild from "@/components/DashboardChild";

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-3 justify-center w-full h-full">
      <CardsCarousel />
      <DashboardChild />
    </section>
  );
}
