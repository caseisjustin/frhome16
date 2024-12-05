import React from "react";
import HeroImg from "../assets/HeroImg/Image.png"
import CompanyLogo1 from "../assets/HeroComps/Logo.png"
import CompanyLogo2 from "../assets/HeroComps/Logo-1.png"
import CompanyLogo3 from "../assets/HeroComps/Logo-2.png"
import CompanyLogo4 from "../assets/HeroComps/Logo-3.png"
import CompanyLogo5 from "../assets/HeroComps/Logo-4.png"

const Hero = () => {
    const comps = [
        CompanyLogo1,
        CompanyLogo2,
        CompanyLogo3,
        CompanyLogo4,
        CompanyLogo5,
    ]
    return (
        <section className="bg-[#232536]">
            <div className="container mx-auto">
                <div className="py-20 text-white">
                    <div className="flex justify-between items-center">
                        <div className="w-[40%] flex flex-col gap-10 items-start">
                            <h1 className="font-semibold text-[56px]">
                                Transform Your Idea Into Reality with Finsweet
                            </h1>
                            <p className="text-[16px]">
                                The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
                            </p>
                            <button className="bg-[#444CFC] py-[20px] px-[30px] text-white">
                                Request Quote --
                            </button>
                        </div>
                        <div>
                            <img src={HeroImg} alt="Hero IMG" />
                        </div>
                    </div>
                    <div className="flex justify-between pt-10">
                        {comps?.map(item =>
                            <img
                                className="text-[30px] opacity-[7] hover:opacity-[1]"
                                src={item}
                                alt="Company img" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero