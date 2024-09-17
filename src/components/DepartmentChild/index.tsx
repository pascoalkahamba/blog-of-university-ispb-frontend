"use client";

import UsersTable from "@/components/UsersTable";
import CoursesList from "@/components/CoursesList";
import useGetEverything from "@/hooks/useGetEverything";
import { getOneDepartment } from "@/server";
import SkeletonComponent from "@/components/Skeleton";

interface DepartmentChildProps {
  id: number;
}

export default function DepartmentChild({ id }: DepartmentChildProps) {
  const {
    data: department,
    isPending,
    error,
  } = useGetEverything(getOneDepartment, `department-${id}`, id);

  if (isPending)
    return (
      <SkeletonComponent
        isPending={isPending}
        skeletons={[1]}
        width={50}
        height={300}
      />
    );
  if (error)
    return (
      <p className="font-bold text-center">
        Algo deu errado tente novamente: Departamento não encontrado
      </p>
    );

  return (
    <section className="w-full flex justify-center items-center gap-10 flex-wrap">
      <UsersTable department={department} />
      <CoursesList courses={department.courses} />
    </section>
  );
}
