import { ExternalLink } from "react-feather";

export default function LeadlightSection() {
  return (
    <>
      <div className="border-b border-solid border-red-300 mb-4 pb-4">
        <a
          href="https://github.com/callum-jones19/leadlight"
          className="font-bold text-2xl underline flex items-center gap-1 sticky top-0 bg-neutral-50 dark:bg-neutral-900 backdrop-blur-2xl py-2"
        >
          Leadlight
          <ExternalLink className="text-" />
        </a>
        <p className="">
          Leadlight is a suite of digital signal processing algorithms written in
          Rust that can
          be loaded into DAWs compatible with the VST3 or CLAP plugin interfaces.
          It derives it algorihtms from <i>Airwindows</i>, an existing suite
          of VST2 DSP plugins written in C++. It aims to be highly performant,
          thoroughly documented, well tested and easily understandable for new
          developers.
        </p>
        <p className="mt-2 font-bold">
          Tech Stack:
        </p>
        <ul role='list' className='list-disc marker:text-red-900 marker:dark:text-red-400 ml-8 mt-2'>
          <li>Rust</li>
          <li>VST</li>
        </ul>
        <p className="mt-2 font-bold">
          Relevant Knowledge:
        </p>
        <ul role='list' className='list-disc marker:text-red-900 marker:dark:text-red-400 ml-8 mt-2'>
          <li className="mb-2">
            <b>Efficient algorithms:</b> Leadlight is designed to be extremely
            lightweight. To achieve this, specific algorithms are designed for each
            effect to minimise processing time and resource overhead. For example,
            the <i>lowpass</i> plugin uses a sliding window algorithm, combined
            with a recursive infinite impulse response filter to ensure that
            the processing algorithm never needs to backtrack on its own
            calculations, and only ever has to look at two values for each
            calculation it does.
          </li>
          <li className="mb-2">
            <b>Unit testing:</b> Unit tests are written for each processing
            algorithm. They ensure that edge-cases are being propely handled,
            and that audio sample values stay within pre-calculated bounds. This
            gives confidence to developers that changes will not improperly
            change algorithms, and helps minimise run-time crashes.
          </li>
          <li className="mb-2">
            <b>Performance benchmarking:</b> To give quantitative guarantees of
            efficiency, performance benchmarks were developed for the library.
            This allowed the performance of different commits and iterations
            of algoirthms to be directly compared.
          </li>
          <li className="mb-2">
            <b>Thorough documentation:</b> The project fully utilises Rust's
            built-in documentation features to give well-written and relevant
            information regarding processing algorithms and utility functions
            throughout the repository. This includse unit tests baked-in to
            examples provided in processing algorithm docstrings. The repository
            is also carefully designed to be understandable, and the README.md
            sets out all relevant information a new developer might want to
            begin making contributions to the project.
          </li>
        </ul>
      </div>
    </>
  )
}
