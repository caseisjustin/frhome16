import React from "react";

const Hero = () => {
    const herolist = [
        "Technical support",
        "Development",
        "AWS/Azure",
        "Consulting",
        "Information Technology"
    ]

    return (
        <section className="bg-[#FFE6D2]">
            <div className="container mx-auto">
                <div className="py-32 text-black">
                    <div className="flex justify-between items-center">
                        <div className="w-[50%] flex flex-col gap-10 items-start">
                            <h1 className="font-semibold text-[56px]">
                                We Build Software Solutionthat Solve Clients Business Challenges
                            </h1>
                            <p className="text-[16px] text-[#232536]">
                                The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
                            </p>
                            <button className="bg-[#444CFC] py-[20px] px-[30px] text-white">
                                Request Quote --
                            </button>
                        </div>
                        <div className="flex justify-center items-center h-full w-[50%]">
                            <ul className="flex flex-col gap-5">
                                {herolist?.map(word => <li className="text-[#232536] text-[24px] font-bold hover:cursor-pointer">{word}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero