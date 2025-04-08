import { ExternalLink } from "react-feather";

export default function ProjectScreen() {
  return (
    <>
      <div>
        <a
          href="https://github.com/callum-jones19/coralia"
          className="font-semibold text-2xl underline text-red-400 flex items-center gap-1"
        >
          Coralia
          <ExternalLink />
        </a>
        <p className="mt-2">
          Coralia is a cross-platform, local music player. It is powered by
          a <span className="text-amber-400 font-bold">Rust</span> backend that is controlled
          via a <span className="text-amber-400 font-bold">Typescript</span> frontend. The frontend stays in sync with the backend
          state via a series of event listeners and queries.
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
        <p className="mt-2 font-bold">
          Relevant Knowledge:
        </p>
        <ul role='list' className='list-disc marker:text-red-400 ml-8 mt-2'>
          <li>
            <b>Multithreading:</b> The Rust audio player relies heavily on multithreading to handle playback
            itself, and playback event management. All custom Tauri API endpoints
            are asynchronous, to make the frontend responsive and decoupled from the backend.
            This code therefore heavily depends on Rust's safe concurrency principles,
            and makes heavy use of cross-channel communication and Arc/Mutexes
            where appropriate.
          </li>
          <li>
            <b>I/O Buffers:</b>
          </li>
        </ul>
      </div>
    </>
  );
}
