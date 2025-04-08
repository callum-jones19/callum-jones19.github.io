import { BrowserRouter, Route, Routes } from "react-router";
import MainScreen from "./screens/MainScreen";
import ProjectScreen from "./screens/ProjectScreen";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />}>
            <Route index element={<HomeScreen />} />
            <Route path="projects" element={<ProjectScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}