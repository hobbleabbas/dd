import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import firstImage from "../../public/casestudies/mobel/1.png"
import secondImage from "../../public/casestudies/mobel/2.png"
import thirdImage from "../../public/casestudies/mobel/3.png"
import fourthImage from "../../public/casestudies/mobel/4.png"
import fifthImage from "../../public/casestudies/mobel/5.png"
import sixthImage from "../../public/casestudies/mobel/6.png"
import seventhImage from "../../public/casestudies/mobel/7.png"
import eighthImage from "../../public/casestudies/mobel/8.png"

export default function Arezo() {

    const name = "Möbel"
    const headers = [
        "A Lifestyle: Imagining A",
        "Better Place"
    ]

    const services = [
        "UI/UX / Video / Advertising / Messaging",
        "Art Direction / Digital Design / Brand Voice",
        "Social Media"
    ]

    return (
        <div>
            <Navbar />
            <div className="px-8 sm:px-16 flex flex-col">
                <h1 className="flex items-center text-sm tracking-widest justify-center font-semibold">{name}</h1>
                <div className="my-8 sm:my-12" />
                {headers.map((header) => (
                    <p key={header} className="text-6xl font-medium">{header}</p>
                ))}
                <div className="my-6 sm:my-8" />
                <h4 className="mb-2 uppercase text-gray-400 tracking-widest font-regular text-lg">Services</h4>
                {services.map((service)=>(
                    <p key={service} className="text-lg">{service}</p>
                ))}
            </div>
            
            <div className="my-20 sm:my-24" />

            <a target="_blank" href = "https://www.youtube.com/watch?v=pDsNaLfF-Ao">
                <div style={{
                    backgroundImage: `url(${firstImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }} className="hover:shadow-inner hover:blur-sm transition ease-in-out duration-300">
                    <div className="h-screen w-full">
                    </div>
                </div>
            </a>
            
            <div className="my-12 sm:my-16 mx-12 sm:mx-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div style={{
                    backgroundImage: `url(${secondImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }} className=" border border-gray-400 border-2">
                    <div className="h-72 sm:h-128 md:h-144 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${thirdImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }} className="">
                    <div className="h-72 sm:h-128 md:h-144 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${fourthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }} className=" border border-gray-400 border-2">
                    <div className="h-72 sm:h-128 md:h-144 w-full">
                    </div>
                </div>
            </div>

            <div className="my-20 sm:my-24" />

            <div className="flex items-center justify-center">
                <img src={fifthImage.src} />
            </div>

            <div className="my-20 sm:my-24" />

            <div className="grid sm:grid-cols-3 gap-16 mx-24 sm:mx-36">
                <img src={sixthImage.src} />

                <img src={seventhImage.src} />

                <img src={eighthImage.src} />
            </div>

            <NextPage
                text={"Dewji Realty"}
                href={"/case-study/dewji-realty"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}