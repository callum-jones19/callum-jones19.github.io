import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <>
      <div className="text-center flex flex-row gap-1 w-full justify-between items-center">
        <div>
          Callum Jones
        </div>
        <div className="flex flex-row justify-center bg-neutral-800 rounded-full">
          <NavLink
            to="/"
            className={({ isActive }) => `flex items-center p-2 px-4 rounded-full ${isActive ? 'bg-fuchsia-200 text-fuchsia-950' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `flex items-center p-2 px-4 rounded-full ${isActive ? 'bg-fuchsia-200 text-fuchsia-950' : ''}`}
          >
            Projects
          </NavLink>
        </div>
      </div>
    </>
  )
}
