import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.svg';

export const metadata = {
  title: 'Eric — Home',
  description: 'This is Eric Personal\'s place on the internet. Here you\'ll find project, articles and much more.',
  icons: {
    icon: './ico.png',
  },
};

export default function Home() {
  return (
    <div className='bg-blue-700 min-h-screen'>
      <header className="p-4">
        <Image src={logo} alt="" className='hover:animate-spin'/>
      </header>
      <div className="mx-auto my-36 h-full w-full max-w-3xl rounded-xl px-4">
        <h1 className="mb-8 py-3 text-xl font-bold lowercase antialiased">
          My name is{' '}
          <a href="" className="text-blue-400 transition-all duration-300 hover:text-blue-300">
            Eric
          </a>
          , I'm currently living in brazil. My{' '}
          <Link
            href={`/career`}
            className="text-blue-400 transition-all duration-300 hover:text-blue-300"
          >
            career
          </Link>{' '}
          is resolving around software engineering world-class
          <Link href={`/projects`} className="text-blue-400 transition-all duration-300 hover:text-blue-300">
            {' '}
            projects
          </Link>{' '}
          and pursuing the cutting edge of everything I do. I speak four languages and
          much of my ethos comes from my eagerness to practice novel ways of 'hacking'
          things and learn through constant experimentation.
        </h1>
        <a
          className="mt-14 rounded-xl border-[2.8px] border-b-[6px] border-blue-500 bg-blue-600 px-3 py-2 text-base font-black antialiased transition-all hover:border-b-[2.8px] text-white"
          href=""
        >
          Press ⌘ + K to navigate
        </a>
      </div>
    </div>
  );
}
