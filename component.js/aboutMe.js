import Link from 'next/link'

export default function AboutMe() {
  return (
    <section id='about' className='container mx-auto px-4 sm:px-6 md:px-10 lg:px-15 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20'>
      <div className="pb-6 sm:pb-10 md:pb-12 hover:scale-115 duration-300">
        <div className='flex justify-center'> 
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold font-[pT_Serif_Caption]">About Me</p>
        </div>
      </div>
      
      <div className='shadow-2xl rounded-2xl pb-6 sm:pb-8 md:pb-10'>
        <p className='text-justify font-[poppins] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-6 md:py-8'>
          I am a Computer Science and Engineering graduate from Khulna University, specializing in modern web development technologies, including <b>React</b>, <b>Next.js</b>, <b>Express.js</b>, <b>Node.js</b>, <b>AngularJS</b>, and <b>Spring Boot</b>. My expertise lies in designing and implementing efficient, user-centric applications, underpinned by a strong foundation in academic research, particularly in blockchain technology.
          <br></br>
          Beyond technical skills, I have demonstrated exceptional leadership abilities through active roles in student organizations, where I honed my skills in collaboration, problem-solving, and project management. With a passion for continuous learning, I strive to stay updated with evolving technologies and apply my knowledge to make a meaningful impact in the tech industry.
        </p>
        <div className="flex justify-center">
            <a 
              target='_blank' 
              href={"https://drive.google.com/file/d/10xtrxLq_x040WRqJTDnCdbZ5_S8im6Yw/view?usp=sharing"}>
                <div className="shadow-2xl shadow-[#210F37] px-4 py-2 sm:px-6 md:py-3 rounded-xl">
                    <p className="sm:text-base md:text-xl lg:text-2xl font-[pT_Serif_Caption] font-medium"> Here&apos;s My Resume</p>
                </div>
            </a>
        </div>
      </div>
    </section>
  )
}
