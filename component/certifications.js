import Techs from "./cards/techs";

export default function Certifications() {
    return (
        <section 
            id="certification" 
            className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-15 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20"
        >
            <div className="flex justify-center mt-2 hover:scale-115 duration-300 pb-6 sm:pb-8 md:pb-10">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold font-[pT_Serif_Caption]">Certification</p>
            </div>

            
            <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-10 gap-6">
                <div className="md:w-3/4 pr-0  md:pr-4">
                    <a 
                        className="flex flex-col pb-3 gap-y-2"
                        target="_blank" 
                        href={"https://coursera.org/share/bb2b07f687e40f843609ff78b2b48bf8"}
                    >
                        <p className="text-2xl sm:text-3xl md:text-4xl font-[pT_Serif_Caption] font-bold">Coursera</p>
                        <p className="text-xl sm:text-2xl md:text-3xl font-medium font-[pT_Serif_Caption]"> Introduction to Git and GitHub - Google</p>
                    </a>
                    <div className="flex flex-col gap-y-3">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left font-[poppins]">
                            I acquired essential skills for version control and open-source collaboration and successfully completing Google&apos;s <q>Introduction to Git and GitHub</q> course.
                        </p>
                    </div>
                    
                    <div className="flex justify-start pt-4 gap-x-3 sm:gap-x-4 gap-y-2">
                        {/* <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-full">
                            <p className="text-sm sm:text-base md:text-lg font-[poppins] font-medium">Git</p>
                        </div> */}
                        <Techs tech={"Git"} />
                        {/* <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-full cursor-pointer">
                            <p className="text-sm sm:text-base md:text-lg font-[poppins] font-medium">GitHub</p>
                        </div> */}
                        <Techs tech={"GitHub"}/>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
  }
  