import Image from "next/image";
import Footer from "../components/Footer";
import { DDLink } from "../components/Link";
import Navbar from "../components/Navbar";
import { SubTitle } from "../components/Title";

const aboutParagraphs = [
    {
        "company": "ARÉZO",
        "title": [
            "Amplifying The Desire To",
            "Feel Great"
        ],
        "link": "/case-study/arezo",
    },
    {
        "company": "SHēK",
        "title": [
            "A New Breakthrough",
            "to Women’s Fashion"
        ],
        "link": "/case-study/shek",
    },
    {
        "company": "Möbel",
        "title": [
            "A Lifestyle: Imagining A",
            "Better Place",
        ],
        "link": "/case-study/mobel",
    },
    {
        "company": "DEWJI REALTY",
        "title": [
            "Personalized Brand",
            "Representing Individuality."
        ],
        "link": "/case-study/dewji",
    },
    {
        "company": "MAISON DE FLEURS",
        "title": [
            "Blossoming Aesthetics",
            "A Floral Shop On A Mission",
        ],
        "link": "/case-study/maison-de-fleurs",
    },
    {
        "company": "Olive Tree Jewelry",
        "title": [
            "Jewelry that Reflects",
            "Who You Are & Where",
            "You Are From"
        ],
        "link": "/case-study/olive-tree-jewelry",
    },
    {
        "company": "Remé",
        "title": [
            "Essentials Giving",
            "Comfort"
        ],
        "link": "/case-study/reme",
    },
    {
        "company": "Xana International",
        "title": [
            "Hospitality to Residential:",
            "A Look into Canada’s",
            "Greatest Renovated Spaces"
        ],
        "link": "/case-study/xana-international",
    },
    {
        "company": "Friday Grooming Co.",
        "title": [
            "FGC Introduces",
            "Premium Products Developed",
            "& Produced in Toronto"
        ],
        "link": "/case-study/friday-grooming-co",
    },
    {
        "company": "SEQ Technology",
        "title": [
            "Envisioning",
            "Blissful Moments"
        ],
        "link": "/case-study/seq-technology",
    },
    {
        "company": "Bliss Beginnings",
        "title": [
            "Automation & Digital",
            "Transformations - ",
            "Working Through Exceedingly",
            "Complex Technical Challenges"
        ],
        "link": "/case-study/bliss-beginnings",
    },
    {
        "company": "Feldstein Family Law",
        "title": [
            "Amplifying The Desire To",
            "Feel Great"
        ],
        "link": "/case-study/feldstein-family-law",
    },
    {
        "company": "Prime Time Messenger",
        "title": [
            "A Calculated Risk Turned",
            "Into An Innovative Brand"
        ],
        "link": "/case-study/prime-time-messenger",
    }
]
export default function Work() {
    return (
        <div className="h-full">
            <Navbar />
            <div className="py-48 flex flex-col items-center w-full justify-center align-center">
                <p className="text-xl text-slate-800 uppercase font-semibold mb-8">Our Work</p>
                <img src={"/work.png"} className="w-3/4 h-auto" />
            </div>
            <div className="px-16">
                <div className="grid grid-cols-2 gap-y-32 p-16">
                {
                    aboutParagraphs.map((paragraph, index) => (
                        <div key={index} className="grid grid-cols-8 gap-0 justify-left">
                            <p className="text-gray-500 text-md text-lg font-semibold col-span-1">{index + 1}</p>
                            <div className="flex justify-start flex-col col-span-7">
                                <div>
                                    <p className="text-md">{paragraph.company}</p>
                                    <div className="mt-4" />
                                    {paragraph.title.map((title, index) => (
                                        <h2 key={index} className="text-4xl font-semibold max-w-1/2 text-slate-800">{title}</h2>
                                    ))}
                                    <div className="mt-8" />
                                    <DDLink 
                                        text="See Case Study"
                                        defaultUnderlined={true}
                                        href={paragraph.link}
                                        dark={false}
                                    />
                                </div>
                                <div className="mt-4" />
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>

            <div className="my-16" />

            <Footer dark={true}/>
        </div>
    )
}