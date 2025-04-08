import CoraliaSection from "./CoraliaSection";

export default function ProjectScreen() {
  return (
    <>
      <div className="border-b border-red-300 mb-4 pb-4">
        <h1
          className="font-semibold text-3xl text-red-400 flex items-center gap-1"
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
    </>
  );
}
