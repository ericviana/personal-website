import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.svg';

export const metadata = {
  title: 'Eric — Home',
  description:
    "This is Eric Personal's place on the internet. Here you'll find project, articles and much more.",
  icons: {
    icon: './ico.png',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* <header className="p-4">
        <Image src={logo} alt="" className="hover:animate-spin" />
      </header> */}
      <div className="mx-auto my-44 h-full w-full max-w-3xl rounded-xl px-4">
        <h1 className="mb-8 py-3 text-sm antialiased">
          My name is Eric, I'm currently living in brazil. My career is resolving around
          software engineering world-class projects and pursuing the cutting edge of
          everything I do. I speak four languages and much of my ethos comes from my
          eagerness to practice novel ways of 'hacking' things and learn through constant
          experimentation.
        </h1>
        <a
          className="mt-14 rounded-xl border-[2.8px] border-b-[6px] border-gray-100 bg-white px-3 py-2 text-sm antialiased transition-all hover:border-b-[2.8px] text-zinc-900"
          href=""
        >
          Press ⌘ + K to navigate
        </a>
      </div>
    </div>
  );
}
