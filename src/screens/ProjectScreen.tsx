import CoraliaSection from "./CoraliaSection";
import RootkitSection from "./RootkitSection";
import TerminalTyperSection from "./TerminalTyperSection";

export default function ProjectScreen() {
  return (
    <>
      <div className="border-b border-red-300 mb-2 pb-4 relative">
        <h1
          className="font-bold text-3xl flex items-center gap-1"
        >
          Projects
        </h1>
        <p className="my-2">
          This is a collection of the major projects I have worked on over the years.
          I have left out a majority of university-specific projects, although
          these should still be available on my Github where relevant.
        </p>
      </div>
      <CoraliaSection />
      <TerminalTyperSection />
      <RootkitSection />
    </>
  );
}
