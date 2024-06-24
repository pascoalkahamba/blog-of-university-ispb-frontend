import CardsCarousel from "@/components/CardsCarousel";
import CardsPost from "@/components/CardsPost";
import classes from "./styles.module.css";

export default function Dashboard() {
  return (
    <section className={classes.container}>
      <CardsCarousel />
      <CardsPost />
    </section>
  );
}
