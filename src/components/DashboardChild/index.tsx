"use client";
import { carouselData } from "@/mocks";
import CardPost from "@/components/CardsPost";
import { IUser } from "@/interfaces";
import useGetEverything from "@/hooks/useGetEverything";
import { getAllPost } from "@/server";
import SkeletonComponent from "@/components/Skeleton";

export default function DashboardChild() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") as string
  ) as IUser;
  const {
    data: allPosts,
    error,
    isPending,
  } = useGetEverything(getAllPost, `allPosts${currentUser.id}`, null);

  if (isPending)
    return (
      <SkeletonComponent
        isPending={isPending}
        skeletons={[3, 2, 3, 12, 2, 23, 4, 3, 5]}
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

  console.log("allPosts", allPosts);
  return (
    <div className="flex items-center gap-3 w-full mt-10 flex-wrap">
      {allPosts.map(
        ({
          id,
          department,
          title,
          picture,
          likes,
          unlikes,
          statusLike,
          statusUnlike,
        }) => (
          <CardPost
            key={id}
            height={`440px`}
            title={title}
            likes={likes}
            unlikes={unlikes}
            statusLike={statusLike}
            statusUnlike={statusUnlike}
            department={department}
            id={id}
            picture={picture}
          />
        )
      )}
    </div>
  );
}
