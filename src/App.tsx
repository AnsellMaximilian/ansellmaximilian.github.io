import "./App.css";
import { Contact } from "./components/Contact";
import { Copyright } from "./components/Copyright";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectList } from "./components/ProjectList";
import { SideLinks } from "./components/SideLinks";
import { SkillsList } from "./components/SkillsList";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <main className="App bg-gray-950 text-white relative pb-16">
      <Navbar />
      <div className="max-w-2xl mx-auto container">
        <Hero />
        <Timeline />
        <div className="mt-4"></div>

        <ProjectList />
        <div className="mt-4"></div>
        <SkillsList />
        <div className="mt-16"></div>
        <Contact />
        <SideLinks />
        <div className="mt-4"></div>
        <Copyright />
      </div>
    </main>
  );
}

export default App;
