import { carouselData } from "@/mocks";
import Image from "next/image";

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
    <section className=" w-full h-full flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl">
        A rotina diaria de um estudante da universidade ISPB.
      </h1>
      <p className="flex justify-between items-center w-[50%]">
        <span className="text-left">19 - Junho, 2024</span>
        <span className="text-left">numeros de views, 23</span>
      </p>
      <div className="w-[60%] h-[20%]">
        <Image
          src={carouselData[0].image}
          width={300}
          height={300}
          className="w-full  h-[20%] rounded-xl"
          alt={carouselData[0].category}
        />
      </div>
      <div className="p-3 w-[60%]">
        <h1 className="font-bold text-2xl">{params.id}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          omnis adipisci tenetur aspernatur provident praesentium, doloremque
          velit assumenda, dignissimos illo, at quasi nemo. Eos consectetur
          doloribus mollitia praesentium sint deserunt. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Aliquid omnis adipisci tenetur
          aspernatur provident praesentium, doloremque velit assumenda,
          dignissimos illo, at quasi nemo. Eos consectetur doloribus mollitia
          praesentium sint deserunt. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquid omnis adipisci tenetur aspernatur provident
          praesentium, doloremque velit assumenda, dignissimos illo, at quasi
          nemo. Eos consectetur doloribus mollitia praesentium sint deserunt.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          omnis adipisci tenetur aspernatur provident praesentium, doloremque
          velit assumenda, dignissimos illo, at quasi nemo. Eos consectetur
          doloribus mollitia praesentium sint deserunt.Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Aliquid omnis adipisci tenetur
          aspernatur provident praesentium, doloremque velit assumenda,
          dignissimos illo, at quasi nemo. Eos consectetur doloribus mollitia
          praesentium sint deserunt.
        </p>
        <h1 className="font-bold text-2xl">Emanuel Edurado</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          omnis adipisci tenetur aspernatur provident praesentium, doloremque
          velit assumenda, dignissimos illo, at quasi nemo. Eos consectetur
          doloribus mollitia praesentium sint deserunt. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Aliquid omnis adipisci tenetur
          aspernatur provident praesentium, doloremque velit assumenda,
          dignissimos illo, at quasi nemo. Eos consectetur doloribus mollitia
          praesentium sint deserunt. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquid omnis adipisci tenetur aspernatur provident
          praesentium, doloremque velit assumenda, dignissimos illo, at quasi
          nemo. Eos consectetur doloribus mollitia praesentium sint deserunt.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          omnis adipisci tenetur aspernatur provident praesentium, doloremque
          velit assumenda, dignissimos illo, at quasi nemo. Eos consectetur
          doloribus mollitia praesentium sint deserunt.Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Aliquid omnis adipisci tenetur
          aspernatur provident praesentium, doloremque velit assumenda,
          dignissimos illo, at quasi nemo. Eos consectetur doloribus mollitia
          praesentium sint deserunt.
        </p>
        <h1 className="font-bold text-2xl">Francisco Fetapi</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          omnis adipisci tenetur aspernatur provident praesentium, doloremque
          velit assumenda, dignissimos illo, at quasi nemo. Eos consectetur
          doloribus mollitia praesentium sint deserunt. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Aliquid omnis adipisci tenetur
          aspernatur provident praesentium, doloremque velit assumenda,
          dignissimos illo, at quasi nemo. Eos consectetur doloribus mollitia
          praesentium sint deserunt. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquid omnis adipisci tenetur aspernatur provident
          praesentium, doloremque velit assumenda, dignissimos illo, at quasi
          nemo. Eos consectetur doloribus mollitia praesentium sint deserunt.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          omnis adipisci tenetur aspernatur provident praesentium, doloremque
          velit assumenda, dignissimos illo, at quasi nemo. Eos consectetur
          doloribus mollitia praesentium sint deserunt.Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Aliquid omnis adipisci tenetur
          aspernatur provident praesentium, doloremque velit assumenda,
          dignissimos illo, at quasi nemo. Eos consectetur doloribus mollitia
          praesentium sint deserunt.
        </p>
      </div>
    </section>
  );
}
