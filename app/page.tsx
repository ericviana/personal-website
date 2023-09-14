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
      <div className="max-w-xl mx-auto my-[30vh] px-6">
        <p className="text-neutral-500 text-sm">I am Eric, a programmer and manager, dedicated to crafting meaningful experiences. In the realm where technology and aesthetics converge, I wield code and design as my tools to breathe life into the intangible.</p>
        <p className="text-neutral-500 text-sm mt-4">With each keystroke, I transmute algorithms into stories, emotions into visuals, and connections into immersive encounters. I embrace the responsibility of shaping how we interact with the digital landscape, infusing empathy, purpose, and beauty into every creation.</p>
        <div className="flex gap-2 mt-7">
          <a href="https://www.fros.dev" className="bg-zinc-900/90 text-xs text-neutral-50 shadow-lg hover:shadow-xl transition-all rounded-lg w-fit px-3 py-1 border border-gray-600">✨ Fros</a>
          <a href="https://www.fros.dev" className="bg-zinc-900/90 text-xs text-neutral-50 shadow-lg hover:shadow-xl transition-all rounded-lg w-fit px-3 py-1 border border-gray-600">📖 Articles</a>
          <a href="https://www.crafta.studio" className="bg-zinc-900/90 text-xs text-neutral-50 shadow-lg hover:shadow-xl transition-all rounded-lg w-fit px-3 py-1 border border-gray-600">🏅 Agency</a>
          <a href="#" className="bg-zinc-100/60 text-xs text-neutral-400/60 rounded-lg w-fit px-3 py-1 border border-gray-100 cursor-not-allowed" title="Comming soon">🏦 Venture Capital</a>
        </div>
      </div>
    </div>
  );
}
