import ProjectCard from "./cards/projectCard"
import arochiInteriors from "@/public/Projects/Arochi_Interiors.gif"
import ApartmentHunt from "@/public/Projects/Apartment_Hunt.gif"
import orbit from "@/public/Projects/Orbit.png"
import taskManager from "@/public/Projects/Task_Manager.png"
import Video_Trimmer from "@/public/Projects/Video_Trimmer.gif"
import Font_group from "@/public/Projects/Font-Groups.gif"

const projectLists = [
    {
        title: "Arochi Interiors",
        githubLink: "https://github.com/fardin-Sachi/Arochi-Interiors",
        liveLink: "https://arochi-interiors.onrender.com/",
        image: arochiInteriors,
        imageOptimization: false,
        description: "Designed a modern and user-friendly landing page with optimized design, focusing on performance and accessibility.",
        technologies: [
            "Next.js", "Tailwind CSS"
        ]
    },
    {
        title: "Font Group",
        githubLink: "https://github.com/fardin-Sachi/font-groups",
        liveLink: "https://font-groups.vercel.app/",
        image: Font_group,
        imageOptimization: false,
        description: "A full-stack web application to upload, group, and manage custom .ttf fonts.",
        technologies: [
            "React", "Node.js", "Express.js", "MongoDB Atlas", "Zustand"
        ]
    },
    {
        title: "Apartment Hunt",
        githubLink: "https://github.com/fardin-Sachi/Apartment_Hunt",
        liveLink: null,
        image: ApartmentHunt,
        imageOptimization: false,
        description: "Engineered a web-based rental platform with Next.js, incorporating advanced search filters and interactive maps, facilitating a faster property discovery process for prospective tenants.",
        technologies: [
            "Next.js", "Tailwind CSS"
        ]
    },
    {
        title: "Orbit",
        githubLink: "https://github.com/fardin-Sachi/Orbit",
        liveLink: null,
        image: orbit,
        imageOptimization: true,
        description: "An e-commerce website dedicated to books, providing a platform for users to browse and purchase various books.",
        technologies: [ 
            "React", "Node.js", "Express.js", "MongoDB Atlas"
        ]
    },
    {
        title: "Task Manager",
        githubLink: "https://github.com/fardin-Sachi/Task-Manager",
        liveLink: null,
        image: taskManager,
        imageOptimization: true,
        description: "A task management application featuring a frontend developed with Angular and a backend powered by Spring Boot. It aims to provide users with an efficient platform to organize and track their tasks effectively.",
        technologies: [
            "AngularJS", "Spring Boot"
        ]
    },
    {
        title: "Video Trimmer",
        githubLink: "https://github.com/fardin-Sachi/VideoEditor",
        liveLink: null,
        image: Video_Trimmer,
        imageOptimization: false,
        description: "A video editing tool designed to trim videos efficiently, developed as part of an academic project. It provides users with an intuitive interface to select and cut video segments, ensuring a user-friendly experience.",
        technologies: [
            "Java", "JavaFX"
        ]
    },
]

export default function Projects() {
  return (
    <section 
        id="projects" 
        className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20'
    >
        <div className="pb-8 sm:pb-10 hover:scale-115 duration-300">
            <div className='flex justify-center'> 
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold font-[pT_Serif_Caption]">Projects</p>
            </div>
            {/* <hr className='w-60 h-1 mx-auto bg-gray-400 border-0 rounded-sm ' /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {projectLists.map(project => 
                <div key={project.title}>
                    <ProjectCard projectList={project}/>
                </div>
            )}
        </div>
    </section>
  )
}
