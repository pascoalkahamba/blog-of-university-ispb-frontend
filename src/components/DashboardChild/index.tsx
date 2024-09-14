"use client";
import CardPost from "@/components/CardsPost";
import { getAllPost } from "@/server";
import SkeletonComponent from "@/components/Skeleton";
import useQueryPost from "@/hooks/useQueryPost";
import { useAtomValue } from "jotai";
import { departmentIdAtom } from "@/storage/atom";

export default function DashboardChild() {
  const departmentId = useAtomValue(departmentIdAtom);
  const {
    query: { isPending, error, data: allPosts },
  } = useQueryPost(getAllPost, "allPosts", departmentId);

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
