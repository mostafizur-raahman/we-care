import {
    FaCalendarAlt,
    FaCheckCircle,
    FaMapMarkerAlt,
    FaUserAlt,
} from "react-icons/fa";

import doctorTransImage from "../../../public/doctor-tra.png";
import instragram from '../../../public/insta-tra.png'
import telegram from '../../../public/tele-tra.png'
import messanger from '../../../public/messanger-tra.png'
import './Featured.css'
import Count from "../Count/Count";
const Featured = () => {
    return (
        <div >
            <div className="lg:flex grid w-full mt-10 ">
            <div className="lg:w-1/2 p-4 lg:p-10 space-y-3">
                <h1 className="lg:text-5xl text-2xl font-bold">
                    Protect Your Health
                </h1>
                <h1 className="lg:text-5xl text-2xl font-bold">
                    And Take Care Of
                </h1>
                <h1 className="lg:text-5xl text-2xl font-bold">Your Health</h1>
                <div className="grid lg:grid-cols-2 grid-cols-1 p-2">
                    <div className="flex gap-3 p-2">
                        <h1 className="mt-2">
                            {" "}
                            <FaCalendarAlt className="text-sky-500"></FaCalendarAlt>
                        </h1>
                        <div>
                            <h1 className="font-bold text-xl">
                                Make An Appoinment
                            </h1>
                            <p className="p-2">
                                Schedule With Your Favorite Doctor Anytime
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 p-2">
                        <h1 className="mt-2">
                            {" "}
                            <FaCheckCircle className="text-sky-500"></FaCheckCircle>
                        </h1>
                        <div>
                            <h1 className="font-bold text-xl">
                                Health Guarantee Health
                            </h1>
                            <p className="p-2">
                                We Always Provide The Best Waranty For You
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 p-2">
                        <h1 className="mt-2">
                            {" "}
                            <FaUserAlt className="text-sky-500"></FaUserAlt>
                        </h1>
                        <div>
                            <h1 className="font-bold text-xl">
                                Make An Appoinment
                            </h1>
                            <p className="p-2">
                                Schedule With Your Favorite Doctor Anytime
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 p-2">
                        <h1 className="mt-2">
                            {" "}
                            <FaMapMarkerAlt className="text-sky-500"></FaMapMarkerAlt>
                        </h1>
                        <div>
                            <h1 className="font-bold text-xl">
                                Make An Appoinment
                            </h1>
                            <p className="p-2">
                                Schedule With Your Favorite Doctor Anytime
                            </p>
                        </div>
                    </div>
                </div>
                
                <a
                    href="#_"
                    className="relative bg-sky-500 text-white inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2  rounded-full shadow-md group"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full  duration-300 -translate-x-full text-white group-hover:translate-x-0 ease">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                        </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                        Button Text
                    </span>
                    <span className="relative invisible">Button Text</span>
                </a>
            </div>
            <div className="lg:w-1/2 h-[400px]">
                <img src={doctorTransImage} className="absolute" alt="" />
                <img src={instragram} className="relative w-[50px]  lg:top-[90px] image-animation" alt="" />
                <img src={telegram} className="relative w-[80px]   lg:left-[350px] slide" alt="" />
                <img src={messanger}className="relative w-[50px] sm:top-[-20px] lg:left-[420px] lg:top-[300px] circular-animation" alt="" />
            </div>
            
        </div>
        <Count></Count>
        </div>
    );
};

export default Featured;
