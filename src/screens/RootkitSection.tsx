import { ExternalLink } from "react-feather";

export default function RootkitSection() {
  return (
    <>
      <div>
        <a
          href="https://github.com/callum-jones19/COMP6841_SA"
          className="font-bold text-2xl underline flex items-center gap-1 sticky top-0 dark:bg-neutral-900 backdrop-blur-2xl pb-2"
        >
          FreeBSD Rootkit
          <ExternalLink className="text-" />
        </a>
        <p>
          A FreeBSD rootkit written in <span className="text-red-400 font-bold">C</span>.
          This repository contains my extensive writeup of the entire process. This
          was a university project where the focus was on consistent documentation
          of the research process, detailing how you got from the beginning of
          the project to the end.
        </p>
        <p>
          The rootkit operates as a 'support' system for another hypothetical
          virus. It aims to completely hide a file from the operating system
          by hijacking the relevant system calls to ignore a hardcoded file
          name value. This includes hiding it from file size calculations, etc.
          There was a partial implementation of it hiding itself from a
          Host-based Intrusion Detection System, but this was incomplete.
        </p>
        <p className="mt-2 font-bold">
          Tech Stack:
        </p>
        <ul role='list' className='list-disc marker:text-red-400 ml-8 mt-2'>
          <li>C</li>
          <li>Operating System Calls</li>
        </ul>
      </div>
    </>
  )
}

