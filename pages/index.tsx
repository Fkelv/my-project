import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen p-6">
      <Image src="/logo.svg" alt="Logo" width={72} height={16} />
      <Image
        className="my-6"
        src="/image-web-3-mobile.jpg"
        alt="Logo"
        width={400}
        height={800}
      />
      <h1 className="font-extrabold text-4xl">
        The bright future of web 3.0?{" "}
      </h1>
      <p className="text-zinc-500 my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        suscipit itaque unde, recusandae in veritatis veniam ad praesentium quae
        temporibus nihil quibusdam adipisci reprehenderit saepe quis nulla
        corrupti fugit nisi. Lorem ipsum dolor sit amet consectetur adipisicing
      </p>

      <button className="bg-red-600 py-3 px-6 font-extrabold tracking-widest text-white ">
        READ MORE
      </button>

      <div className="bg-black text-white p-5 mt-12">
        <h1 className="text-orange-300 text-4xl font-bold">New</h1>

        <h2 className="mt-4 text-xl mb-3 font-bold">
          Hydrogen vs Electric Cars
        </h2>

        <p className="text-sm mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. explicabo
          itaque ipsum?
        </p>

        <hr className="mb-4" />

        <h1 className="mt-4 text-xl mb-3 font-bold">
          The Downsides of Ai Artistry
        </h1>

        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          voluptatem natus sapiente in nobis modi itaque eligendi, nesciunt
          explicabo distinctio dolore. Quis excepturi aperiam voluptatibus a
          deserunt cupiditate dicta veritatis!
        </p>
        <hr className="mb-4" />

        <h1 className="mt-4 text-xl mb-3 font-bold">
          The Downsides of Ai Artistry
        </h1>

        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          voluptatem natus sapiente in nobis modi itaque eligendi, nesciunt
          explicabo distinctio dolore. Quis excepturi aperiam voluptatibus a
          deserunt cupiditate dicta veritatis!
        </p>

        <hr className="mb-4" />

        <h1 className="mt-4 text-xl mb-3 font-bold">Is Vc Funding Drying Up</h1>

        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          voluptatem natus sapiente in nobis modi itaque eligendi, nesciunt
          explicabo distinctio dolore. Quis excepturi aperiam voluptatibus a
          deserunt cupiditate dicta veritatis!
        </p>
      </div>

      <div className="flex mt-12">
        <Image src="/image-retro-pcs.jpg" alt="Logo" width={100} height={200} />
        <div className="ml-5">
          <h1 className="text-zinc-300">01</h1>
          <h3 className="text-black font-bold">Reviving Retro Pcs</h3>
          <p className="text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            .
          </p>
        </div>
      </div>
    </div>
  );
}
