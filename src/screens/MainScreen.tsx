import { Outlet } from "react-router";
import Sidebar from "../Sidebar";

export default function MainScreen() {
  return (
    <>
      <div className="min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-neutral-900 dark:bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] items-center dark:text-white md:py-8">
        <div className="min-h-[70vh] w-full md:w-3xl max-w-full border-red-300 border-solid rounded-md md:border shadow-md dark:bg-neutral-900 bg-neutral-50 p-3 md:p-5 m-auto">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
