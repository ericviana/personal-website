import Image from 'next/image';

export const metadata = {
  title: 'Latest work',
  description:
    "This is Eric's corner on the internet. Here you'll find project, articles, social links and much more.",
  icons: {
    icon: './ico.png',
  },
};

const work = [
  {
    id: 1,
    name: 'Work 1',
    src: '/assets/1.png',
  },
  {
    id: 2,
    name: 'Work 2',
    src: '/assets/2.png',
  },
  {
    id: 3,
    name: 'Work 3',
    src: '/assets/3.png',
  },
  {
    id: 4,
    name: 'Work 4',
    src: '/assets/4.png',
  },
  {
    id: 5,
    name: 'Work 5',
    src: '/assets/5.png',
  },
  {
    id: 6,
    name: 'Work 6',
    src: '/assets/6.png',
  },
  {
    id: 7,
    name: 'Work 7',
    src: '/assets/7.png',
  },
  {
    id: 8,
    name: 'Work 8',
    src: '/assets/8.png',
  },
  {
    id: 9,
    name: 'Work 9',
    src: '/assets/9.png',
  },
  {
    id: 10,
    name: 'Website',
    src: '/assets/10.png',
  },
];

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-[#1E1E1E] to-[#151515] pb-10">
      {work.map((item) => (
        <div key={item.id} className="mx-auto max-w-xl px-6 pt-6">
          <Image src={item.src} alt={item.name} width={600} height={600} />
        </div>
      ))}
    </div>
  );
}
