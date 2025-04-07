import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <>
      <div className="h-full basis-2/12 flex flex-col gap-1">
        <NavLink
          to={"/"}
          className="bg-purple-200 hover:bg-purple-300 text-purple-950 border-2 border-solid border-purple-800 p-1 text-center rounded-md"
        >
          Home
        </NavLink>
        <NavLink
          to={"/projects"}
          className="bg-purple-200 hover:bg-purple-300 text-purple-950 border-2 border-solid border-purple-800 p-1 text-center rounded-md"
        >
          Projects
        </NavLink>
        <NavLink
          to={"/musicreviews"}
          className="bg-purple-200 hover:bg-purple-300 text-purple-950 border-2 border-solid border-purple-800 p-1 text-center rounded-md"
        >
          Music Reviews
        </NavLink>
      </div>
    </>
  )
}
