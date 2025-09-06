export default function Activities() {
    return (
      <section 
        id="activities" 
        className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-15 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20"
    >
          <div className="flex justify-center mt-2 hover:scale-115 duration-300 pb-6 sm:pb-8 md:pb-10">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold font-[pT_Serif_Caption]">Activities</p>
          </div>

            <div className="flex flex-col gap-8">
                {/* CLUSTER */}
                <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-10 gap-6">
                    <div className="md:w-7/12">
                        <div className="flex flex-col gap-2">
                            <a 
                                target="_blank" 
                                href="https://www.facebook.com/CLUSTER.KU"
                                rel="noopener noreferrer"
                            >
                                <p className="text-2xl sm:text-3xl md:text-4xl font-[pT_Serif_Caption] font-bold">CLUSTER, Khulna University</p>
                                <p className="text-xl sm:text-2xl md:text-3xl font-medium font-[pT_Serif_Caption]">President</p>
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left font-[poppins]">

                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start md:w-5/12">
                        <p className="text-base sm:text-lg md:text-xl text-center md:text-left font-[pT_Serif_Caption]">Khulna-9208, Khulna</p>
                        <p className="text-base sm:text-lg md:text-xl text-center md:text-left font-[pT_Serif_Caption]">March 2024 – February 2025</p>
                    </div>
                </div>
                
                {/* Badhan */}
                <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-10 gap-6">
                    <div className="md:w-7/12">
                        <div className="flex flex-col gap-2">
                            <a 
                                target="_blank" 
                                href="https://www.facebook.com/groups/90982940236"
                                rel="noopener noreferrer"
                            >
                                <p className="text-2xl sm:text-3xl md:text-4xl font-[pT_Serif_Caption] font-bold">Badhan, Khulna University</p>
                                <p className="text-xl sm:text-2xl md:text-3xl font-medium font-[pT_Serif_Caption]">Vice President</p>
                            </a>
                        </div>
                        <div className="flex flex-col pl-2">
                            <p className="text-left font-[poppins] text-xl">

                            </p>
                        </div>
                        
                    </div>

                    <div className="flex flex-col justify-start md:w-5/12">
                        <p className="text-base sm:text-lg md:text-xl text-center md:text-left font-[pT_Serif_Caption]">Khulna-9208, Khulna</p>
                        <p className="text-base sm:text-lg md:text-xl text-center md:text-left font-[pT_Serif_Caption]">February 2024 – February 2025</p>
                    </div>
                </div>
            </div>
          
      </section>
    )
  }
  