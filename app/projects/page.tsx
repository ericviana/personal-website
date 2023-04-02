import Image from 'next/image';
import projectImage from '../../public/Mask group.png';
import Project from '@/components/Project';
import Back from '@/components/Back';

export const metadata = {
  title: 'Eric — Projects',
  description:
    "This is Eric Personal's place on the internet. Here you'll find project, articles and much more.",
  icons: {
    icon: './ico.png',
  },
};

export default function Projects() {
  return (
    <>
      <div className="mx-auto my-36 max-w-5xl rounded-xl px-4">
      <Back />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
          <Project title='Petrichor Foundation' url={projectImage}/>
          <Project title='Petrichor Foundation' url={projectImage}/>
          <Project title='Petrichor Foundation' url={projectImage}/>
          <Project title='Petrichor Foundation' url={projectImage}/>
          <Project title='Petrichor Foundation' url={projectImage}/>
          <Project title='Petrichor Foundation' url={projectImage}/>
          <Project title='Petrichor Foundation' url={projectImage}/>
          <Project title='Petrichor Foundation' url={projectImage}/>
          <Project title='Petrichor Foundation' url={projectImage}/>
        </div>
      </div>
    </>
  );
}
