"use client";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";
import classes from "./styles.module.css";
import { carouselData } from "@/mocks";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  category: string;
  height: string;
  link: string;
}

export function Card({ image, title, category, height, link }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})`, height: rem(height) }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Link href={link}>
        <Button variant="white" color="dark">
          Leia o artigo
        </Button>
      </Link>
    </Paper>
  );
}

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = carouselData.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} height={`440px`} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      style={{ height: "420px" }}
    >
      {slides}
    </Carousel>
  );
}
