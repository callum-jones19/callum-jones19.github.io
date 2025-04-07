import { Outlet } from "react-router";

export default function MainScreen() {
  return (
    <>
      <div className="h-screen w-full dark:bg-neutral-800 flex flex-col items-center p-6">
        {/*<Sidebar />*/}
        <div className="min-h-10/12 w-xl max-w-full border-purple-600 border-solid rounded-md border-2 bg-purple-200">
          <Outlet />
        </div>
      </div>
    </>
  );
}
