import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import firstImage from "../../public/casestudies/shek/1.png"
import secondImage from "../../public/casestudies/shek/2.png"
import thirdImage from "../../public/casestudies/shek/3.png"
import fourthImage from "../../public/casestudies/shek/4.png"
import fifthImage from "../../public/casestudies/shek/5.png"
import sixthImage from "../../public/casestudies/shek/6.png"
import seventhImage from "../../public/casestudies/shek/7.png"
import eighthImage from "../../public/casestudies/shek/8.png"
import ninthImage from "../../public/casestudies/shek/9.png"
import tenthImage from "../../public/casestudies/shek/10.png"
import eleventhImage from "../../public/casestudies/shek/11.png"
import twelfthImage from "../../public/casestudies/shek/12.png"
import thirteenthImage from "../../public/casestudies/shek/13.png"
import fourteenthImage from "../../public/casestudies/shek/14.png"
import fifteenthImage from "../../public/casestudies/shek/15.png"
import sixteenthImage from "../../public/casestudies/shek/16.png"
import seventeenthImage from "../../public/casestudies/shek/17.png"
import eighteenthImage from "../../public/casestudies/shek/18.png"
import nineteenthImage from "../../public/casestudies/shek/19.png"
import twentiethImage from "../../public/casestudies/shek/20.png"
import twentyfirstImage from "../../public/casestudies/shek/21.png"

export default function Arezo() {

    const name = "SHēK"
    const headers = [
        "A New Breakthrough",
        "to Women’s Fashion"
    ]

    const services = [
        "Web Design / Social Media / Digital Design"
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

            <div style={{
                backgroundImage: `url(${firstImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-150 w-full">
                </div>
            </div>

            <div className="my-6 sm:my-8" />

            <div style={{
                backgroundImage: `url(${secondImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-144 w-full shadow-inner">
                </div>
            </div>

            <div className = "my-6 sm:my-8 mx-6 sm:mx-8 grid sm:grid-cols-2 gap-8">
                <div style={{
                    backgroundImage: `url(${thirdImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-108 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${thirdImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-108 w-full">
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${fourthImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-144 w-full shadow-inner">
                </div>
            </div>

            <div className = "my-6 sm:my-8 mx-6 sm:mx-8 grid sm:grid-cols-2 gap-8">
                <div style={{
                    backgroundImage: `url(${fifthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-108 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${twentiethImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-108 w-full">
                    </div>
                </div>
            </div>

            <div className = "my-6 sm:my-8 grid sm:grid-cols-2 gap-8">
                <div style={{
                    backgroundImage: `url(${sixthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-96 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${twentyfirstImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-96 w-full">
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4">
                <div style={{
                    backgroundImage: `url(${seventhImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-80 w-full">
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${eighthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-80 w-full">
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${ninthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-80 w-full">
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${tenthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-80 w-full">
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${fourteenthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-80 w-full">
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${thirteenthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-80 w-full">
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${twelfthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-80 w-full">
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${eleventhImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-80 w-full">
                    </div>
                </div>
            </div>
            
            <div className="my-6 sm:my-8" />

            <div style={{
                backgroundImage: `url(${fifteenthImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-160 w-full shadow-inner">
                </div>
            </div>

            <div className = "my-12 sm:my-16 mx-12 sm:mx-16 grid sm:grid-cols-4 gap-4">
                <div style={{
                    backgroundImage: `url(${sixteenthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-160 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${seventeenthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-160 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${eighteenthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-160 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${nineteenthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-160 w-full">
                    </div>
                </div>
            </div>

            <NextPage
                text={"MöBEL"}
                href={"/case-study/mobel"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}