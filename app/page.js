import AboutMe from "@/component.js/aboutMe";
import Activities from "@/component.js/activities";
import Certifications from "@/component.js/certifications";
import Education from "@/component.js/education";
import Experience from "@/component.js/experience";
import Footer from "@/component.js/footer";
import Myself from "@/component.js/myself";
import Navbar from "@/component.js/navbar";
import Projects from "@/component.js/projects";
import Skills from "@/component.js/skills";

export default function Home() {
  return (
    <div className="bg-[#dee3ed] cursor-default">
      <Navbar />
      <Myself />
      <AboutMe />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Activities />
      <Footer />
    </div>
  );
}
// Preferred BG colors: 
// F1E7E7
// EFEFEF
// F8F5E9
// edf2f8
// e4e4e4
// dee3ed

// Add: Job Title.
// >> Update: Styles of Titles of a section (Khulna University/Coursera, etc).
// >> Update: Changed AngularJS to Angular Logo.
// >> Update: Use cursor-default on the whole website.
// >> Update: Placed Angular and Spring Boot logo at the first.
