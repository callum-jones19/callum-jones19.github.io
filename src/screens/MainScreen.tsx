import { Outlet } from "react-router";
import Sidebar from "../Sidebar";

export default function MainScreen() {
  return (
    <>
      <div className="h-screen w-full bg-neutral-900 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] flex flex-col items-center p-6 dark:text-white">
        <div className="min-h-10/12 w-xl max-w-full border-fuchsia-300 border-solid rounded-md border shadow-md dark:bg-neutral-900 bg-neutral-50 p-5">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
