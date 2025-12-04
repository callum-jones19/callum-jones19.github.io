import CoraliaSection from "./CoraliaSection";
import LeadlightSection from "./LeadlightSection";
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
        <p className="mt-3">The following projects are detailed below:</p>
        <ul role='list' className='list-decimal marker:text-red-900 marker:dark:text-red-400 ml-8 mt-2'>
          <li>Leadlight</li>
          <li>Coralia</li>
          <li>Terminal Typer</li>
          <li>FreeBSD Rootkit</li>
        </ul>
      </div>
      <LeadlightSection />
      <CoraliaSection />
      <TerminalTyperSection />
      <RootkitSection />
    </>
  );
}
