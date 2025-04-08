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
          A TUI Monkeytype clone. This is just a simple little app that lets you

        </p>
        <p className="mt-2">
          The frontend is written to be fully screen-size responsive and as intuitive
          as possible.
        </p>
        <p className="mt-2 font-bold">
          Tech Stack:
        </p>
        <ul role='list' className='list-disc marker:text-red-400 ml-8 mt-2'>
          <li>React</li>
          <li>Tauri</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </>
  )
}