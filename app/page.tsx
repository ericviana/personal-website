import Image from 'next/image';
import { Inter } from 'next/font/google';
import logo from '../public/logo.svg';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eric — Home',
  description: 'This is Eric Personal\'s place on the internet. Here you\'ll find project, articles and much more.',
  icons: {
    icon: './ico.png',
  },
};

export default function Home() {
  return (
    <>
      <header className="m-6">
        <Image src={logo} alt="" className='hover:animate-spin'/>
      </header>
      <div className="mx-auto my-36 h-full w-full max-w-3xl rounded-xl px-4">
        <h1 className="mb-8 py-3 text-xl font-bold lowercase antialiased">
          My name is{' '}
          <a href="" className="text-zinc-400 transition-all duration-300 hover:text-zinc-300">
            Eric
          </a>
          , I'm currently living in brazil. My{' '}
          <a
            href=""
            className="text-zinc-400 transition-all duration-300 hover:text-zinc-300"
          >
            career
          </a>{' '}
          is resolving around software engineering world-class
          <a href="" className="text-zinc-400 transition-all duration-300 hover:text-zinc-300">
            {' '}
            projects
          </a>{' '}
          and pursuing the cutting edge of everything I do. I speak four languages and
          much of my ethos comes from my eagerness to practice novel ways of 'hacking'
          things and learn through constant experimentation.
        </h1>
        <a
          className="mt-14 rounded-xl border-[2.8px] border-b-[6px] border-zinc-700 bg-zinc-800 px-3 py-2 text-base font-bold antialiased transition-all hover:border-b-[2.8px]"
          href=""
        >
          Press ⌘ + K to navigate
        </a>
      </div>
    </>
  );
}
