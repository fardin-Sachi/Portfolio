const institutions = [
    {
        name: "Khulna University",
        location: "Khulna-9208, Khulna",
        degree: "Bachelor of Science in Computer Science and Engineering",
        resultType: "CGPA",
        result: "3.45/4.00",
        additionalInfo: {
            thesisTitle: "Blockchain-based Official Document Attestation Network",
            thesisDesc: "Researched on a blockchain-based system that can eradicate the predicament of counterfeiting official documents along with the attestation system.significantly improving the authentication, authorization, confidentiality, privacy, and ownership in processing and validating official documents."
        }
    },
    {
        name: "Gazipur Ideal College",
        location: "BOF-1703, Gazipur",
        degree: "Higher Secondary Certificate",
        resultType: "GPA",
        result: "4.50/5.00",
    },
    {
        name: "Gazipur Cantonment Board High School",
        location: "",
        degree: "Secondary School Certificate",
        resultType: "GPA",
        result: "4.85/5.00"
    },
]

export default function Education() {
    return (
        <section 
            id="education" 
            className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-15 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20"
        >
            <div className="flex justify-center mt-2 hover:scale-115 duration-300 pb-6 sm:pb-8 md:pb-10">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold font-[pT_Serif_Caption]">Education</p>
            </div>
            <div className="grid gap-8">
                <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl py-6 sm:py-8 md:py-10 px-6 sm:px-8 md:px-10 gap-4">
                    <div className="lg:w-7/12">
                        <div className="flex flex-col pb-3 gap-y-2">
                            <p className="text-xl sm:text-2xl md:text-3xl font-bold font-[pT_Serif_Caption]">{institutions[0].name}</p>
                            <p className="text-lg sm:text-xl md:text-2xl font-medium font-[pT_Serif_Caption]">{institutions[0].degree}</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div className="flex">
                                <p className="font-bold font-[poppins]">{institutions[0].resultType}:</p>
                                <p className="font-[poppins]">&nbsp;{institutions[0].result}</p>
                            </div>
                            
                            <div className="flex">
                                <p className="font-bold font-[poppins]">Thesis Title:</p>
                                <p className="font-[poppins]">&nbsp;{institutions[0].additionalInfo.thesisTitle}</p>
                            </div>
                            <p className="font-[poppins] text-sm pl-24 text-justify">{institutions[0].additionalInfo.thesisDesc}</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-5/12 justify-start">
                        <p className="text-base sm:text-lg md:text-xl text-center lg:text-left font-[pT_Serif_Caption]">{institutions[0].location}</p>
                        <p className="text-base sm:text-lg md:text-xl text-center lg:text-left font-[pT_Serif_Caption]">January 2020 - January 2025</p>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  