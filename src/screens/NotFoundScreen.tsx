import './tmp.css';
import { NavLink } from "react-router";

export default function NotFoundScreen() {
  return (
    <div className="h-screen w-full bg-neutral-800 text-white flex flex-col items-center justify-center gap-4">
      <p className="font-semibold text-4xl text-purple-200">This page doesn't exist!</p>
      <NavLink  to={"/"} className="bg-neutral-100 text-black text-purple-950 p-2 bg-purple-200 border-2 border-solid border-purple-800">Return home</NavLink>
    </div>
  );
}
