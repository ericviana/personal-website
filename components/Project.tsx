import Image, { StaticImageData } from 'next/image';

interface ProjectData {
  title: string;
  url: StaticImageData;
}

export default function project(props: ProjectData) {
  return (
    <div className="mx-auto rounded-2xl border-[2.8px] border-b-[6px] border-zinc-700 bg-zinc-800 px-3 py-3 text-base font-bold antialiased transition-all hover:border-b-[2.8px] cursor-pointer">
      <Image src={props.url} alt="" />
      <h2 className='text-base text-zinc-200 mt-1 text-center font-semibold'>{props.title}</h2>
    </div>
  );  
}
