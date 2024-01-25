import { ModeToggle } from "../components/toggle-theme";

export default function Blog() {
  return (
    <>
  <svg className="h-[100dvh] absolute w-full -z-50 opacity-10" id="texture">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4"></feTurbulence>
      <feColorMatrix type="saturate" values="0"></feColorMatrix>
    </filter>

    <rect width="100%" height="100%" filter="url(#noise)"></rect>
  </svg>
    <div className="absolute h-full w-full -z-20">
      <div className="">
        <ModeToggle />
      </div>
  <div className="mx-auto max-w-lg p-4">
    <h1 className="mt-12 font-serif text-5xl">Micro Interacti<span className="inline-block translate-y-0 cursor-default transition-all hover:translate-y-6 hover:italic">o</span>ns</h1>
    <p className="z-50 text-sm font-light text-stone-600">
      <br /><br />
      Minim id sit nostrud adipisicing. Laboris do labore labore labore aute qui in anim qui Lorem eu qui. Culpa <span className="blur-sm transition-all hover:blur-0">reprehenderit</span> sint officia amet nostrud reprehenderit qui. Nulla exercitation <a href="#" className="z-50 bg-opacity-20 italic underline underline-offset-2 hover:text-foreground hover:underline-offset-1 transition-all">nostrud excepteur ↗</a> est nostrud elit culpa dolor esse ex pariatur. Cillum excepteur sunt laborum id. Esse culpa veniam irure. Enim deserunt occaecat duis Lorem anim magna ut. Dolor culpa deserunt velit reprehenderit reprehenderit irure esse commodo Lorem pariatur. <br /><br />Dolore eiusmod veniam ad nostrud est magna nulla consequat tempor ullamco. Irure laborum officia excepteur cillum sunt quis est anim cupidatat duis qui ut sunt. Est commodo culpa tempor cillum labore. Ex pariatur fugiat duis ipsum amet laboris eu est laboris aute veniam in enim non enim. Deserunt nulla velit mollit est in reprehenderit velit laborum. Amet eiusmod elit esse ullamco velit quis. Aliqua sit do nostrud.<br /><br />
      Aute in ut velit est sunt tempor ad laborum nostrud ea aliquip eiusmod aliqua. Aliqua labore voluptate sit exercitation. Mollit dolore culpa dolore.
      <br /><br />
      — Consequat nulla <br />
      — Laborum cillum <br />
      — Commodo reprehenderit <br />
      — Upidatat aliqua <br />
      <br /><br />
      <code className="bg-gradient-to-br from-accent/20 to-accent/80 border border-border block p-3 rounded-[6px]">./~ code fros-next-app</code>
    </p>
  </div>
</div>
</>
  )
}
