"use client";

import { Container, Grid, SimpleGrid, rem } from "@mantine/core";
import classes from "./styles.module.css";
import { Card } from "../CardsCarousel";
import { carouselData } from "@/mocks";

const PRIMARY_COL_HEIGHT = rem("200%");

export default function CardsPost() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="xl" className={classes.container}>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing="md"
        className={classes.cards}
      >
        <Card {...carouselData[4]} height={SECONDARY_COL_HEIGHT} />
        <Grid gutter="md">
          <Card {...carouselData[3]} height={SECONDARY_COL_HEIGHT} />

          <Grid.Col span={6}>
            <Card {...carouselData[1]} height={SECONDARY_COL_HEIGHT} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Card {...carouselData[2]} height={SECONDARY_COL_HEIGHT} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
