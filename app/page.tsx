import Image from 'next/image';
import logo from '../public/Mask group.png';

export const metadata = {
  title: 'Eric Viana',
  description:
    "This is Eric Personal's place on the internet. Here you'll find project, articles and much more.",
  icons: {
    icon: './ico.png',
  },
};

export default function Home() {
  return (
    <div className="bg-white text-zinc-900 antialiased">
      <div className="h-screen w-full max-w-xl border border-gray-100">
        <div className="mb-4 border-y border-gray-100">
          <h1 className="bg-gray-50 bg-opacity-50 py-2 px-4 text-sm">Eric Viana</h1>
        </div>
        <h1 className="mt- px-4 text-sm text-gray-400 antialiased">
          I am Eric, a programmer and manager, dedicated to crafting meaningful
          experiences. In the realm where technology and aesthetics converge, I wield code
          and design as my tools to breathe life into the intangible. <br /> <br /> With
          each keystroke, I transmute algorithms into stories, emotions into visuals, and
          connections into immersive encounters. I embrace the responsibility of shaping
          how we interact with the digital landscape, infusing empathy, purpose, and
          beauty into every creation.
        </h1>
        {/* <a
          className="mt-14 rounded-md border border-b-[2px] border-gray-100 bg-white px-3 py-2 text-sm antialiased transition-all hover:border-b text-zinc-900"
          href=""
        >
          Press ⌘ + K to navigate
        </a> */}
        {/* <div className="mt-6 mb-6 border-y border-gray-100">
          <h1 className="bg-gray-50 bg-opacity-50 py-2 px-4 text-sm">
            Successful Projects
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-8 px-4 text-sm">
          <div className="">
            Petrichor
            <p className="mt-3 text-gray-400">
              Biggest plataform that reward developers and promote open-source innovation.
            </p>
          </div>
          <div>
            Dino Craft
            <p className="mt-3 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem
              nisi ab.
            </p>
          </div>
          <div>
            Woukit
            <p className="mt-3 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem
              nisi ab.
            </p>
          </div>
          <div>
            Flush Core
            <p className="tex mt-3 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rem
              nisi ab.
            </p>
          </div>
        </div> */}

        <div className="mt-6 mb-6 border-y border-gray-100 bg-gray-50 bg-opacity-50">
          <h1 className="py-2 px-4 text-sm">Contact Me</h1>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="px-4 text-sm">
            <p>Email</p>
            <a
              className="text-sm text-gray-400 hover:underline"
              href="mailto:ericvswork@gmail.com"
              target="_blank"
            >
              hi@eric.run
            </a>
          </div>
          <div className="px-4 text-sm">
            <p>Calendar</p>
            <a
              className="text-sm text-gray-400 hover:underline"
              href="https://cal.com/ericviana/15min"
              target="_blank"
            >
              cal.com/ericviana
            </a>
          </div>
          <div className="px-4 text-sm">
            <p>Github</p>
            <a
              className="text-sm text-gray-400 hover:underline"
              href="https://github.com/ericviana"
              target="_blank"
            >
              github.com/ericviana
            </a>
          </div>
          <div className="px-4 text-sm">
            <p>Linkedin</p>
            <a
              className="text-sm text-gray-400 hover:underline"
              href="https://www.linkedin.com/in/eric-viana/"
              target="_blank"
            >
              linkedin.com/in/ericviana
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
