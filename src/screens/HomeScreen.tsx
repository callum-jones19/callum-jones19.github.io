import pfp from '../assets/pfp.jpg';

export default function HomeScreen() {
  return (
    <div className="flex flex-col w-full h-full gap-5">
      <header className="flex flex-row w-full justify-between gap-10 items-center">
        <div>
          <h2 className="font-semibold text-2xl mb-2">About Me</h2>
          <p>
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
        <h2 className="font-semibold text-2xl mb-2">Links</h2>
        <ul role='list' className='list-disc marker:text-red-300 ml-3'>
          <li>
            <a href='https://github.com/callum-jones19/' className='underline text-red-400 flex items-center gap-1'>
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
