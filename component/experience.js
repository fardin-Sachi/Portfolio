import Techs from "./cards/techs";

export default function Experience() {
  return (
    <section
      id="experience"
      className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-15 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="flex justify-center mt-2 hover:scale-115 duration-300 pb-6 sm:pb-8 md:pb-10">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold font-[pT_Serif_Caption]">
          Experience
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* AUST Intern*/}
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-10 lg:px-10 gap-6 lg:gap-10">
          <div className="lg:w-7/12 pr-0 lg:pr-6">
            <div className="flex flex-col pb-3 gap-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-[pT_Serif_Caption] font-bold">
                Ahsanullah University of Science and Technology
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium font-[pT_Serif_Caption]">
                Software Engineer Intern
              </p>
            </div>
            <div className="flex flex-col pl-0 lg:pl-2 gap-y-3">
              <li className="text-base sm:text-lg md:text-xl text-left font-[poppins]">
                Developing <u>Annual Confidential Report</u> that assess the performance of an employee based on different factors such as their payscale, regularity, punctuality, motivation, quality, effectiveness, etc.
              </li>
              <li className="text-base sm:text-lg md:text-xl text-left font-[poppins]">
                Contributed to a full‑stack university management system built on a microservices architecture using AngularJS and Spring, handled clean API integrations and data flows for 6,000+ users.
              </li>
            </div>
            <div className="flex flex-wrap justify-start pt-4 gap-x-3 sm:gap-x-4 gap-y-2">
              <Techs tech={"Angular"} />
              <Techs tech={"Spring"} />
              <Techs tech={"Spring Boot"} />
              <Techs tech={"Oracle Database"} />
              <Techs tech={"MySQL"} />
            </div>
          </div>
          <div className="flex flex-col md:w-5/12 mx-auto lg:mx-0 w-full lg:w-auto justify-start">
            <p className="text-base sm:text-lg md:text-xl text-center lg:text-left font-[pT_Serif_Caption]">
              Dhaka-1208, Dhaka
            </p>
            <p className="text-base sm:text-lg md:text-xl text-center lg:text-left font-[pT_Serif_Caption]">
              November 2025 – Present
            </p>
          </div>
        </div>

        {/* AUST Trainee*/}
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-10 lg:px-10 gap-6 lg:gap-10">
          <div className="lg:w-7/12 pr-0 lg:pr-6">
            <div className="flex flex-col pb-3 gap-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-[pT_Serif_Caption] font-bold">
                Ahsanullah University of Science and Technology
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium font-[pT_Serif_Caption]">
                Trainee Software Engineer
              </p>
            </div>
            <div className="flex flex-col pl-0 lg:pl-2 gap-y-3">
              <li className="text-base sm:text-lg md:text-xl text-left font-[poppins]">
                Developing Meeting Management System that features agenda creation, participant assignment and meeting workflow automation for the whole institution&apos;s different offices/departments/syndicate.
                
              </li>
              <li className="text-base sm:text-lg md:text-xl text-left font-[poppins]">
                Learnt the Angular, Spring Boot and MySQL database, applied them in <u>Help Desk</u> project which aims to make the necessary system supports online-based.
              </li>
            </div>
            <div className="flex flex-wrap justify-start pt-4 gap-x-3 sm:gap-x-4 gap-y-2">
              <Techs tech={"Angular"} />
              <Techs tech={"Spring Boot"} />
              <Techs tech={"MySQL"} />
            </div>
          </div>
          <div className="flex flex-col md:w-5/12 mx-auto lg:mx-0 w-full lg:w-auto justify-start">
            <p className="text-base sm:text-lg md:text-xl text-center lg:text-left font-[pT_Serif_Caption]">
              Dhaka-1208, Dhaka
            </p>
            <p className="text-base sm:text-lg md:text-xl text-center lg:text-left font-[pT_Serif_Caption]">
              August 2025 – November 2025
            </p>
          </div>
        </div>

        {/* Appstick */}
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-10 lg:px-10 gap-6 lg:gap-10">
          <div className="lg:w-7/12 pr-0 lg:pr-6">
            <div className="flex flex-col pb-3 gap-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-[pT_Serif_Caption] font-bold">
                Appstick
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium font-[pT_Serif_Caption]">
                Web Developer Intern
              </p>
            </div>
            <div className="flex flex-col pl-0 lg:pl-2 gap-y-3">
              <li className="text-base sm:text-lg md:text-xl text-left font-[poppins]">
                Developed the front end of an Apartment Rent System using
                Next.js and Tailwind CSS.
              </li>
              <li className="text-base sm:text-lg md:text-xl text-left font-[poppins]">
                Gained hands-on experience in building responsive UIs,
                collaborating with a development team, and optimizing
                performance for a seamless user experience.
              </li>
            </div>
            <div className="flex justify-start pt-4 gap-x-3 gap-y-2 sm:gap-x-4">
              <Techs tech={"Next.js"} />
              <Techs tech={"Tailwind CSS"} />
            </div>
          </div>
          <div className="flex flex-col md:w-5/12 mx-auto lg:mx-0 w-full lg:w-auto justify-start">
            <p className="text-base sm:text-lg md:text-xl text-center lg:text-left font-[pT_Serif_Caption]">
              Khulna-9100, Khulna
            </p>
            <p className="text-base sm:text-lg md:text-xl text-center lg:text-left font-[pT_Serif_Caption]">
              December 2023 – February 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
