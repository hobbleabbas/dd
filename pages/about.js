import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SubTitle } from "../components/Title";

const aboutParagraphs = [
    {
        "title": [
            "Exploring both the",
            "minute details and the",
            "big picture."
        ],
        "text": "We love to look beyond the surface of things — While we understand that it’s impossible to completely silence our minds (designers do be crazy), we believe it’s far more important to be present. That’s why we put all our ideas to the test and take pride in our iterative processes."
    },
    {
        "title": [
            "Focusing on",
            "Ideas & Purpose."
        ],
        "text": "It all begins with you. We love hearing your stories and why you do what you do. Let us take you out for a coffee, ideas flow better with caffeine in our system."
    },
    {
        "title": [
            "A resilient source",
            "of individual &",
            "collective identity."
        ],
        "text": "Unified vision, individual ideas, combined artistry. We have got some great minds at work that come together to breathe life into your visions."
    },
]
export default function About() {
    return (
        <div className="bg-black h-full text-white">
            <Navbar dark={true} />
            <div className="py-48 flex flex-col items-center w-full justify-center align-center">
                <p className="text-xl text-gray-400 uppercase font-semibold mb-8">About Us</p>
                <img src={"/aboutus.png"} className="w-3/4 h-auto" />
            </div>
            <div className="px-16">
                {
                    aboutParagraphs.map((paragraph, index) => (
                        <div key={index} className="grid grid-cols-2 p-16">
                            <div className="grid grid-cols-8 gap-0 justify-left">
                                <p className="text-gray-500 text-md text-extralight font-light col-span-1">{index + 1}</p>
                                <div className="flex justify-start flex-col col-span-7">
                                    <div>
                                        {paragraph.title.map((title, index) => (
                                            <h2 key={index} className="text-2xl max-w-1/2 text-gray-400">{title}</h2>
                                        ))}
                                    </div>
                                    <div className="mt-4" />
                                    <p className="typography text-white font-light text-md max-w-3/4">{paragraph.text}</p>
                                </div>
                            </div>
                            <div className="">
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="my-16" />

            <Footer dark={true}/>
        </div>
    )
}