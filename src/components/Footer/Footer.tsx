import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import logo from '../../assets/logo.svg'
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#333333] mt-[160px] text-white w-full px-[5.12%] lg:px-[13.02%]">
            <div className=" py-12">
                <div className="mb-8">
                    <Image src={logo} alt=" logo" width={133} height={130} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-600 pt-8">
                    <div>
                        <h3 className="font-extrabold text-xl mb-3">Services</h3>
                        <ul className="flex flex-col gap-2.5 text-sm text-gray-300">
                            <li className=" font-semibold text-lg ">Bike and Rickshaw rental</li>
                            <li className=" font-semibold text-lg ">Guided Tours of Lucca</li>
                            <li className=" font-semibold text-lg ">Guided Bike Tour of Lucca</li>
                            <li className=" font-semibold text-lg ">Trip In The Tuscan Hills</li>
                            <li className=" font-semibold text-lg ">Transportation With Luxury Cars</li>
                            <li className=" font-semibold text-lg ">Wine Tours By Bus With Guide</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl mb-3">Home</h3>
                        <ul className="flex flex-col gap-2.5 text-sm text-gray-300">
                            <li className=" font-semibold text-lg ">Home</li>
                            <li className=" font-semibold text-lg ">About Us</li>
                            <li className=" font-semibold text-lg ">Tour Packages</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl mb-3">Help</h3>
                        <ul className="flex flex-col gap-2.5 text-sm text-gray-300">
                            <li className=" font-semibold text-lg ">Terms of Use</li>
                            <li className=" font-semibold text-lg ">Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl mb-3">Contacts</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-2">
                                <MdLocationOn className="text-orange-500 w-6 h-6"  />
                                Piazza Napoleone, Lucca, Tuscany
                            </li>
                            <li className="flex items-center gap-2">
                                <MdPhone className="text-orange-500 w-6 h-6"  />
                                +39 346 368 5708
                            </li>
                            <li className="flex items-center gap-2">
                                <MdEmail className="text-orange-500 w-6 h-6"  />
                                italiainlimo@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl mb-3">Social Media</h3>
                        <div className="flex items-center gap-4">
                            <a href="#" className="bg-orange-500 p-2 rounded-full  w-[50px] h-[50px] flex justify-center items-center">
                                <FaTwitter className=" text-[#333333] text-2xl " />
                            </a>
                            <a href="#" className="bg-orange-500 p-2 rounded-full  w-[50px] h-[50px] flex justify-center items-center">
                                <FaFacebookF className=" text-[#333333] text-2xl " />
                            </a>
                            <a href="#" className="bg-orange-500 p-2 rounded-full  w-[50px] h-[50px] flex justify-center items-center">
                                <FaInstagram className=" text-[#333333] text-2xl " />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
                    Copyright © 2022. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
