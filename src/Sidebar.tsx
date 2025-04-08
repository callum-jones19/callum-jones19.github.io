import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <>
      <div className="text-center flex flex-row gap-1 w-full justify-between items-center mb-8">
        <NavLink to="/" className="hover:underline text-red-400">
          /~
        </NavLink>
        <nav className="flex flex-row justify-center bg-white dark:bg-neutral-800 rounded-full">
          <NavLink
            to="/"
            className={({ isActive }) => `flex items-center p-2 px-4 rounded-full ${isActive ? 'dark:bg-red-200 dark:text-red-950 bg-red-100 text-red-900' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `flex items-center p-2 px-4 rounded-full ${isActive ? 'dark:bg-red-200 dark:text-red-950 bg-red-100 text-red-900' : ''}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) => `flex items-center p-2 px-4 rounded-full ${isActive ? 'dark:bg-red-200 dark:text-red-950 bg-red-100 text-red-900' : ''}`}
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </>
  )
}
