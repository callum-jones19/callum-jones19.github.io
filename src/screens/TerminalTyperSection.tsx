import { ExternalLink } from "react-feather";

export default function TerminalTyperSection() {
  return (
    <>
      <div>
        <a
          href="https://github.com/callum-jones19/terminal_typer"
          className="font-semibold text-2xl underline text-red-400 flex items-center gap-1 sticky top-0 bg-white dark:bg-neutral-900 backdrop-blur-2xl pb-2"
        >
          Terminal Typer
          <ExternalLink className="text-" />
        </a>
        <p className="">
          A TUI Monkeytype clone written in <span className="text-amber-400 font-bold">Rust</span>. This is just a simple little app that lets you
          do timed rounds where you are given a randomised prompt, and you have
          to type it to completion as quickly as possible. The prompt fills
          in with colour-coded characters to represent accuracy.
        </p>
        <p className="mt-2 font-bold">
          Tech Stack:
        </p>
        <ul role='list' className='list-disc marker:text-red-400 ml-8 mt-2'>
          <li>Rust</li>
          <li>Ratatui (TUI interface builder)</li>
        </ul>
      </div>
    </>
  )
}
