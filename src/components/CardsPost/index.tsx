import { Button, Paper, rem, Text, Title } from "@mantine/core";
import Link from "next/link";
import classes from "@/components/CardsPost/styles.module.css";
import { IDepartment, IPicture } from "@/interfaces";

interface CardPostProps {
  id: number;
  likes: number;
  unlikes: number;
  statusLike: boolean;
  statusUnlike: boolean;
  department: IDepartment;
  picture: IPicture;
  title: string;
  height: string;
}

export default function CardPost({
  title,
  picture,
  id,
  likes,
  unlikes,
  statusLike,
  statusUnlike,
  department,
  height,
}: CardPostProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${picture.url})`, height: rem(height) }}
      className={`${classes.card} flex-grow flex-shrink basis-80 mb-4`}
    >
      <div>
        <Text className={classes.category} size="xs">
          Departamento de {department.name}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Link
        href={`post/${id}/${Math.abs(likes)}/${Math.abs(
          unlikes
        )}/${statusLike}/${statusUnlike}`}
      >
        <Button variant="white" color="dark">
          Leia o artigo
        </Button>
      </Link>
    </Paper>
  );
}
