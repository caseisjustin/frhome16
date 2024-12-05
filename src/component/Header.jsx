import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <header className="bg-[#232536]">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center w-full h-[80px]">
                        <div>
                            <img className="text-white text-[30px]" src="#" alt="{Finsweet" />
                        </div>
                        <nav className="h-full flex items-center">
                            <ul className="flex gap-4 h-full items-center">
                                <li className="flex text-white opacity-[.7] hover:opacity-[1] items-center h-full hover:border-t-orange-400 hover:border-t p-2">
                                    <Link className="" to={"/"}>Home</Link>
                                </li>
                                <li className="flex text-white opacity-[.7] hover:opacity-[1] items-center h-full hover:border-t-orange-400 hover:border-t p-2">
                                    <Link className="" to={"/service"}>Service</Link>
                                </li>
                                <li className="flex text-white opacity-[.7] hover:opacity-[1] items-center h-full hover:border-t-orange-400 hover:border-t p-2">
                                    <Link className="" to={"/"}>Company</Link>
                                </li>
                                <li className="flex text-white opacity-[.7] hover:opacity-[1] items-center h-full hover:border-t-orange-400 hover:border-t p-2">
                                    <Link className="" to={"/"}>Career</Link>
                                </li>
                                <li className="flex text-white opacity-[.7] hover:opacity-[1] items-center h-full hover:border-t-orange-400 hover:border-t p-2">
                                    <Link className="" to={"/"}>Blog</Link>

                                </li>
                                <li className="flex text-white opacity-[.7] hover:opacity-[1] items-center h-full hover:border-t-orange-400 hover:border-t p-2">
                                    <Link className="" to={"/"}>Contact us</Link>

                                </li>
                                <li className="flex text-white opacity-[.7] hover:opacity-[1] items-center h-full hover:border-t-orange-400 hover:border-t p-2">
                                    <Link className="" to={"/"}>Clone project</Link> --
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header