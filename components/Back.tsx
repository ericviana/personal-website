import Link from "next/link"
export default function Back() {
  return (
        <Link
          className="mt-14 rounded-xl border-[2.8px] border-b-[6px] border-zinc-700 bg-zinc-800 px-3 py-2 text-base font-bold antialiased transition-all hover:border-b-[2.8px]"
          href={`/`}
        >
          ⎋ Back Home
        </Link>
  )
}
