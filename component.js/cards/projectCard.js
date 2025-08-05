import Image from "next/image";
import dummyImage from "@/public/me.png"
import Techs from "./techs";

export default function ProjectCard({projectList}) {
  return (
    
        <div className="flex flex-col justify-between shadow-2xl rounded-2xl h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] px-4 sm:px-6 md:px-8 py-6 sm:py-8 gap-4">

            <div className="flex justify-center">
                <Image 
                    className="rounded-lg w-full object-cover h-[150px] sm:h-[180px] md:h-[200px]"
                    key={projectList.title}
                    src={projectList.image}
                    alt={projectList.title}
                    // height={500}
                    // width={500}
                    // unoptimized
                    quality={60}
                    unoptimized={!projectList.imageOptimization}
                />
            </div>
            <div className="flex flex-col gap-y-2 flex-grow">
                <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold font-[pT_Serif_Caption]">
                    {projectList.title}
                </p>
                <p className="text-justify text-base sm:text-lg md:text-xl font-medium font-[poppins] overflow-hidden">
                    {projectList.description}
                </p>
            </div>

            {/* Used technologies */}
            <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 pb-4"> 
                {projectList.technologies.map(element => (
                        <Techs key={element} tech={element}/>
                ))}
            </div>
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-shadow text-sm font-bold"> 
                {projectList.githubLink? 
                    <a href={projectList.githubLink} className="">Source Code</a>
                : null}
                {projectList.liveLink? 
                    <a href={projectList.liveLink}>|&nbsp;&nbsp;&nbsp;&nbsp;Live</a>
                : null}
            </div>
            
        </div>
        
  )
}
