"use client"

import * as React from "react"
import {
  Twitter,
  Calendar,
  Mail,
  Sparkles,
  TerminalSquare,
  Workflow
} from "lucide-react"


import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-sm text-primary">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-primary/5 px-1.5 font-mono text-[10px] font-medium text-primary opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search and press enter ↵" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Contact">
            <CommandItem onSelect={() => {window.open('https://cal.com/ericviana')}}>
              <Calendar className="mr-2 h-4 w-4" />
              Calendar
            </CommandItem>
            <CommandItem onSelect={() => {window.open('mailto:eric@crafta.studio')}}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Email</span>
            </CommandItem>
            <CommandItem onSelect={() => {window.open('https://x.com/ericvna')}}>
              <Twitter className="mr-2 h-4 w-4" />
              <span>Twitter</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            <CommandItem onSelect={() => {window.open('https://crafta.studio')}}>
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Crafta</span>
              <CommandShortcut>Software Agency</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => {window.open('https://fros.dev')}}>
              <TerminalSquare className="mr-2 h-4 w-4" />
              <span>Fros</span>
              <CommandShortcut>Open Source</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => {window.open('https://raunt.app')}}>
              <Workflow className="mr-2 h-4 w-4" />
              <span>Raunt</span>
              <CommandShortcut>Job Hunting SaaS</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}