import { ModeToggle } from "./components/toggle-theme";
import { CommandDialogDemo } from "./components/command-demo";
import { DraftingCompass, Palette, Code2, KeyboardIcon, Heart, Shell } from "lucide-react"

export const metadata = {
  title: 'Eric Viana',
  description:
    "This is Eric's Personal's place on the internet. Here you'll find project, articles, social links and much more.",
  icons: {
    icon: './ico.png',
  },
};

export default function Home() {
  return (
    <div className="antialiased h-[100dvh] p-4 bg-background squares">
      <div className="flex justify-between">
        <br />
        <ModeToggle />
      </div>
      <div className="max-w-xl mx-auto mt-[30vh] flex flex-col gap-6 tracking-wide font-semibold">
        <h1 className="text-primary/90 text-xl">I am Eric, an experienced software engineer <DraftingCompass className="inline"/> dedicated to crafting meaningful <Shell className="inline" /> experiences. In the realm where technology and aesthetics  converge, I wield code <KeyboardIcon className="inline"/> and design <Palette className="inline"/> as my tools to breathe life into the intangible.</h1>
        <CommandDialogDemo />
      </div>
    </div>
  );
}
