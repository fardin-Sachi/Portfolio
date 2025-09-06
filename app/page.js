import AboutMe from "@/component/aboutMe";
import Activities from "@/component/activities";
import Certifications from "@/component/certifications";
import Education from "@/component/education";
import Experience from "@/component/experience";
import Footer from "@/component/footer";
import Myself from "@/component/myself";
import Navbar from "@/component/navbar";
import Projects from "@/component/projects";
import Skills from "@/component/skills";

export default function Home() {
  return (
    <div className="cursor-default">
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
// 


// bg-[#dee3ed] //Previous BG color