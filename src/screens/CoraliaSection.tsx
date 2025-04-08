import { ExternalLink } from "react-feather";

export default function CoraliaSection() {
  return (
    <>
      <div>
        <a
          href="https://github.com/callum-jones19/coralia"
          className="font-semibold text-2xl underline text-red-400 flex items-center gap-1"
        >
          Coralia
          <ExternalLink className="text-" />
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
          <li className="mb-2">
            <b>Multithreading:</b> The Rust audio player relies heavily on multithreading to handle playback
            itself, and playback event management. All custom Tauri API endpoints
            are asynchronous, to make the frontend responsive and decoupled from the backend.
            This code therefore heavily depends on Rust's safe concurrency principles,
            and makes heavy use of cross-channel communication and Arc/Mutexes
            where appropriate.
          </li>
          <li className="mb-2">
            <b>I/O Buffers:</b> Coralia holds a buffer of decoded audio files in
            its backend when music files are queued to play. To allow enqueing
            potentially thousands of files at once, it only decodes the first 3
            audio files into the buffer at any time, with a new file being
            pulled into the buffer when another one finishes. This minimises open
            file pointers and the bottleneck of file opening, but still allows
            for gapless audio playback.
          </li>
          <li className="mb-2">
            <b>State Synchronisation:</b> The frontend handles no actual audio
            functionality. Instead, it synchronises its state to the backend
            through both queries on page load and listeners for ongoing state
            updates. In doing this, care was taken to minimise page rerenders
          </li>
          <li className="mb-2">
            <b>Large Lists:</b> Coralia's frontend involves frequently
            displaying potentially large volumes of data (songs and albums lists),
            which should be scalable to libraries of any size. To achieve this,
            it uses custom components to only render visible data onto the DOM,
            keeping React re-renders efficient.
          </li>
          <li className="mb-2">
            <b>Image Rendering:</b> Coralia potentially has to render album art
            of arbitrary size. To handle this, when parsing a user's music library,
            Coralia goes over every indexed album and caches its album art in
            1) full size, 2) mid-size (400px * 400px) and 3) thumbnail size (50px
            * 50px). An appropriate image size is then chosen situationally, to
            prevent the frontend performing excessive and demanding paints.
          </li>

        </ul>
      </div>
    </>
  )
}