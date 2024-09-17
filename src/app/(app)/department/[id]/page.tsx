import DepartmentChild from "@/components/DepartmentChild";

interface DepartmentPagesProps {
  params: {
    id: number;
  };
}

export default function DepartmentPage({ params }: DepartmentPagesProps) {
  return <DepartmentChild id={params.id} />;
}
