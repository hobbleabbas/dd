import Image from "next/image";
import Footer from "../components/Footer";
import { DDLink } from "../components/Link";
import Navbar from "../components/Navbar";
import { SubTitle } from "../components/Title";
import humanssplash from "../public/humanssplash.png"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'


const people = [
    { 
        name: "Sarfaraaz Kara",
        title: "Chief Executive Officer",
        image: "/sarfaraaz.png",
        paragraphs: [
            "Sarfaraaz is a collaboration-focused thinker. Having worked in a wide range of industries including health care, government organizations to start-ups and retail stores he has had continuous success developing mass use applications, launching memorable marketing campaigns, and advertising for retailers in inspired spaces. He brings his knowledge of Photography, Videography & Digital advertising to bolster DD’s never-ending pursuit in Creative Innovation.",
            "Under Sarfaraaz’s direction, Digital Dash continues to be on the leading edge of emerging technologies, setting industry trends, challenging the status quo and ever evolving as a full-service creative and marketing agency.",
            "Sarfaraaz’s belief is, in order to be happy, we must start each day with a positive attitude by controlling the things we choose to think about, and focusing on the now. He believes happiness comes from working your hardest for others and watching what you produce, put a smile on others peoples faces."
        ]
    },
    { 
        name: "Sana Saidi",
        title: "Creative Director",
        image: "/sana1.png",
        paragraphs: [
            "Sana is a designer and visual communicator who has been active in the creative industry for 5+ years. She comes from a wide range of disciplines, Direction, Photography, Design, and Philosophy, and it is through these skills she ignites her creative practice. As a designer, Sana finds meaning in her process, understanding all her design decisions and exploring all possible options to create the best possible outcomes for her clients, which further helps her to value her craft.",
            "Prior to joining Digital Dash in 2021, Sana was the founder of an independant practise where she worked with some of the country's leading brands: Bottega, GLDN Hour, Tangerine and Infiniti, to name a few.",
            "As the Creative Director, Sana directs all aspects of the branding process, from Brand Strategy, to Brand Voice, through to creative execution. Sana believes in building long-term relationships and she does that by producing quality work her clients love."
        ]
    },
    { 
        name: "Annar Layla Teja",
        title: "Research Coordinator",
        image: "/sana2.png",
        paragraphs: [
            "Focused on writing, editing, and publishing content for niches to promote growth and engagement for a business. Experienced in staying up to date with changing trend patterns, new platform updates or features to create a strategy catered to each business to meet their needs. Optimizing social media outlets to relay the business as knowledgeable and skillful using content specific to their industry and brand. Applying various methods, skills, knowledge, and experience to achieve a larger reach and new leads for clients. Monitoring multiple social media outlets, posts, and advertisements to achieve specific objectives to expand the business.",
        ]
    },
    { 
        name: "Maryam Shah",
        title: "Director of Client Services",
        image: "/maryamshah.png",
        paragraphs: [
            "Raised in Montreal, Maryam worked in the Fashion Industry as a fashion stylist and has extensive experience in project management. Maryam is responsible for leading the planning team at Digital Dash.",
            "Maryam holds a degree in Fashion from The Metropolitan University (formerly known as Ryerson University)"
        ]
    },
    { 
        name: "Abbas Molu",
        title: "Videographer",
        image: "/abbasmolu.png",
        paragraphs: [
            "Need BIO",
        ]
    },
    { 
        name: "Sal Merchant",
        title: "Chief Technology Officer",
        image: "/salmerchant.png",
        paragraphs: [
            "Sal is a Full Stack Developer with 11+ years of experience working for both large and small firms. He has extensive experience in digital marketing, including SEO and SMO campaigns, as well as website and custom CMS development.",
            "Sal is proficient in HTML, CSS, JavaScript, WordPress, Shopify Liquid Code, PHP, and Bootstrap. Some of Sal’s notable previous work has been with large client partners such as Canadian Tire, BioPed Footcare, Wolverine World Wide Canada, Capital One, Sobeys, Lone Wolf and HESL By National Health Services, UK."
        ]
    },
]
export default function Humans() {
    return (
        <div>
            <Navbar dark={false} />
            <div className="pt-36 pb-24 flex flex-col items-center w-full justify-center align-center">
                <img src={"/mindsatwork.png"} className="w-4/5 h-auto" />
                <img src={"/resilient.png"} className="w-3/4 h-auto mt-8" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 p-4 sm:p-8 md:p-16">
                {people.map((person, index)=>(
                    <div key={index} className="px-4 sm:px-8 py-8">
                        <PersonCard
                            key={index}
                            name = {person.name}
                            title={person.title}
                            picture={person.image}
                            paragraphs={JSON.stringify(person.paragraphs)}
                        />
                    </div>
                ))}
            </div>

            <div className="text-center flex flex-col justify-center items-center">
                <img src="/humanssplash.png" className="flex w-full h-auto" />
            </div>

            <div className="text-center px-16 pt-48 flex flex-col justify-center items-center">
                <img src="/humans/compendium.png" className="flex w-4/5 h-auto" />
                <div className="m-8" />
                <DDLink text={"Featured Work"} href="/work" defaultUnderlined={true} />
            </div>

            <div className="text-center px-16 py-24 flex flex-col justify-center items-center">
                <img src="/humans/surface.png" className="flex w-4/5 h-auto" />
            </div>
            

            <Footer dark={false}/>
        </div>
    )
}

export function PersonCard({ name, title, picture, paragraphs }) {

    const [open, setOpen] = useState(false)

    const style= {
        backgroundImage: `url(${picture})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    
    const imageStyle = {
        width: "100%",
        objectFit: "cover",
        objectPosition: "center",
        backgroundImage: `url(${picture})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }

    return (
        <div>
            <div className="w-full h-108" style={style}>

            </div>
            <p className="mt-8 font-semibold text-lg">{ name }</p>
            <p className="mt-1 mb-4 font-light text-md tracking-wide">{ title }</p>
            <a onClick={()=>{setOpen(true)}} className='cursor-pointer text-slate-600 underline uppercase font-medium hover:opacity-50 underline-offset-8 hover:transition delay-50 text-xs'>
                Read Bio
            </a>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                        <Dialog.Panel className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                            <div className="flex grid grid-cols-3">
                                <div className="hidden sm:block col-span-1 h-120" style={imageStyle}>
                                    <div></div>
                                </div>
                                <div className="px-4 pt-5 pb-4 sm:p-6 col-span-full sm:col-span-2">
                                    <div className="flex justify-between items-center align-center mb-3">
                                        <h3 className="text-lg font-semibold tracking-wide">About { name }</h3>
                                        <a className="p-2 cursor-pointer hover:bg-gray-50" onClick={()=>{setOpen(false)}}>
                                            <XMarkIcon className="h-6 w-6" />
                                        </a>
                                    </div>
                                    <span className="text-sm font-light text-slate-700">
                                        {JSON.parse(paragraphs).map((paragraph, index) => (
                                            <p className="mb-4" key = {index}>{ paragraph }</p>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
                </Dialog>
                </Transition.Root>
        </div>
    )
}
// export function PersonCard({ name, title, picture, paragraphs }) {


//     return (
//         <div>
//             <img
//                 src={picture}
//                 width="full"
//                 height="auto"
//             />
//             <p className="font-serif mt-8 font-semibold text-lg">{ name }</p>
//             <p className="mt-1 mb-4 font-extralight text-sm">{ title }</p>
            // 
//         </div>
//     )
// }