import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <>
      <div className="text-center flex flex-row gap-1 w-full justify-center items-center mb-8 rounded-full">
        {/* <NavLink to="/" className={({ isActive }) => `flex items-center p-2 px-4 rounded-full ${isActive ? 'dark:bg-red-200 dark:text-red-950 bg-red-100 text-red-900' : 'bg-neutral-700'}`}>
          /~
        </NavLink> */}
        <nav className="flex flex-row justify-center bg-white dark:bg-neutral-700 rounded-full shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) => `flex items-center p-2 px-4 rounded-full ${isActive ? 'dark:bg-red-400 dark:text-white bg-red-300 text-red-950' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `flex items-center p-2 px-4 rounded-full ${isActive ? 'dark:bg-red-400 dark:text-white bg-red-300 text-red-950' : ''}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) => `flex items-center p-2 px-4 rounded-full ${isActive ? 'dark:bg-red-400 dark:text-white bg-red-300 text-red-950' : ''}`}
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </>
  )
}
