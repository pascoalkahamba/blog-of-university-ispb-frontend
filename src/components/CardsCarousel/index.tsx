"use client";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import CardPost from "@/components/CardsPost";
import { IUser } from "@/interfaces";
import useGetEverything from "@/hooks/useGetEverything";
import { getAllPost } from "@/server";
import SkeletonComponent from "@/components/Skeleton";

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") as string
  ) as IUser;
  const {
    data: allPosts,
    error,
    isPending,
  } = useGetEverything(getAllPost, `allPosts${currentUser.id}`, null);
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  if (isPending)
    return (
      <SkeletonComponent
        isPending={isPending}
        skeletons={[3, 2]}
        width={200}
        height={300}
      />
    );

  if (error)
    return (
      (
        <p className="p-3 font-bold text-center">
          Algo deu errado tente novamente:
        </p>
      ) + error.message
    );

  if (allPosts.length <= 0)
    return (
      <p className="p-3 font-bold text-center">
        Nenhum post encontrado por favor crie um post.
      </p>
    );

  const slides = allPosts.map(
    ({
      id,
      title,
      department,
      picture,
      likes,
      unlikes,
      statusLike,
      statusUnlike,
    }) => (
      <Carousel.Slide key={id}>
        <CardPost
          height={`440px`}
          id={id}
          picture={picture}
          title={title}
          department={department}
          likes={likes}
          unlikes={unlikes}
          statusLike={statusLike}
          statusUnlike={statusUnlike}
        />
      </Carousel.Slide>
    )
  );

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
