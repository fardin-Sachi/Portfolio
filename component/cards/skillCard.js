import Image from "next/image";

export default function SkillCard( {skillType, logos} ) {
  return (
    <div className="flex flex-col justify-between shadow-2xl rounded-2xl p-6 sm:p-8 gap-4 h-full">
        <p className="text-lg sm:text-xl md:text-2xl text-center font-semibold font-[pT_Serif_Caption] pb-4">{skillType}</p>
        <div className="flex flex-wrap justify-around gap-4">
            {logos.map(logo => 
                <Image 
                    className="cursor-pointer"
                    key={logo.alt}
                    title={logo.alt}
                    width={48}
                    height={48}
                    alt={logo.alt}
                    src={logo.name}
                    quality={20}
                />
            )}
        </div>
    </div>
  )
}
