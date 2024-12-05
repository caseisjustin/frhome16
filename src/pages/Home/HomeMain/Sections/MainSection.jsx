import React from "react";
import MainSecImg1 from "../../../../assets/MainSectionImgs/Image1.png"
import MainSecImg2 from "../../../../assets/MainSectionImgs/Image2.png"
import MainSecImg3 from "../../../../assets/MainSectionImgs/Image3.png"


const MainSection = () => {

    return (
        <>
            <section className="w-full py-40">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-10">
                        <div className="flex justify-between gap-20 w-full">
                            <h2 className="text-[#232536] font-semibold text-[48px] py-5 w-[50%]">
                            The company leads entire webdesign process from concept to delivery.
                            </h2>
                            <div className="flex flex-col gap-5 w-[50%] justify-center">
                                <h4 className="text-[#232536] font-semibold text-[38px]">
                                The Era Of Technology.
                                </h4>
                                <p className="text-[16px]text-[#5D5F6D]">
                                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. 
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between h-[530px]">
                            <img src={MainSecImg1} alt="Our Achievments"/>
                            <img src={MainSecImg2} alt="Our Achievments"/>
                            <img src={MainSecImg3} alt="Our Achievments"/>
                        </div>
                        <div className="flex justify-between items-center">
                            <ul className="flex justify-between w-[50%]">
                                <li className="flex flex-col gap-2 text-black">
                                    <b className="font-semibold text-[38px] text-[#232536]">1560+</b>
                                    <p className="text-[16px]">Project Delivered</p>
                                </li>
                                <li className="flex flex-col gap-2 text-black">
                                    <b className="font-semibold text-[38px] text-[#232536]">100+</b>
                                    <p className="text-[16px]">Professional</p>
                                </li>
                                <li className="flex flex-col gap-2 text-black">
                                    <b className="font-semibold text-[38px] text-[#232536]">950+</b>
                                    <p className="text-[16px]">Happy Client</p>
                                </li>
                                <li className="flex flex-col gap-2 text-black">
                                    <b className="font-semibold text-[38px] text-[#232536]">10 yrs</b>
                                    <p className="text-[16px]">Experience</p>
                                </li>
                            </ul>
                            <a href="#" className="text-[#444CFC] font-medium text-[16px]">Read about us</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainSection