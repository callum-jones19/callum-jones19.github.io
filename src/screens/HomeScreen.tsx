import pfp from '../assets/pfp.jpg';

export default function HomeScreen() {
  return (
    <div className="flex flex-col w-full h-full gap-5">
      <header className="flex flex-row w-full justify-between gap-10 items-start">
        <div>
          <h2 className="font-bold text-2xl mb-2">About Me</h2>
          <p className='mb-2'>
            Hi, I'm Callum! This is where you can find various projects I've worked
            on, random little blog posts, and other bits and pieces I find interesting
            and would like to upload.
          </p>
        </div>
        <img
          loading='lazy'
          src={pfp}
          width={100}
          height={100}
          alt="Profile picture"
          className="rounded-md"
        />
      </header>
      <div className='border-t border-solid border-red-300 pt-4'>
        <h2 className="font-bold text-2xl mb-2">Languages and Experience</h2>
        <p className='mb-2'>
          I'm very comfortable with the following languages, with examples of each
          either on my projects page or available on my Github
        </p>
        <ul role='list' className='list-disc marker:text-red-300 ml-6 mb-2'>
          <li>Typescript/Javascript</li>
          <li>Rust</li>
          <li>Python</li>
          <li>Java</li>
          <li>C</li>
        </ul>
        <p className='mb-2'>
          I currently am particularly interested in front-end development with
          Typescript & React, and enjoy coding backend projects in Rust. I have
          experience with React in large enterprise systems, along with smaller
          personal projects such as my music player, Coralia. I also have experience in software
          deployment and DevOps with Docker and deployment scripts.
        </p>
      </div>
      <div className='border-t border-solid border-red-300 pt-4'>
        <h2 className="font-bold text-2xl mb-2">Links</h2>
        <ul role='list' className='list-disc marker:text-red-300 ml-6'>
          <li>
            <a href='https://github.com/callum-jones19/' className='underline dark:text-red-300 text-red-900 flex items-center gap-1'>
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
