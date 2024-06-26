interface PostProps {
  params: {
    id: string;
  };
}

// export function generateStaticParams() {
//   return [{ id: "1" }, { id: "2" }, { id: "3" }];
// }

export default function Post({ params }: PostProps) {
  return (
    <section className="bg-blue-500">
      <p>{params.id}</p>
    </section>
  );
}
