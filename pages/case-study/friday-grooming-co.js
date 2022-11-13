import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import firstImage from "../../public/casestudies/fgc/1.jpg";
import secondImage from "../../public/casestudies/fgc/2.jpg";
import thirdImage from "../../public/casestudies/fgc/3.jpg";
import fourthImage from "../../public/casestudies/fgc/4.jpg";
import fifthImage from "../../public/casestudies/fgc/5.jpg";
import sixthImage from "../../public/casestudies/fgc/6.jpg";
import seventhImage from "../../public/casestudies/fgc/7.jpg";
import eighthImage from "../../public/casestudies/fgc/8.jpg";
import ninthImage from "../../public/casestudies/fgc/9.jpg";
import tenthImage from "../../public/casestudies/fgc/10.jpg";
import eleventhImage from "../../public/casestudies/fgc/11.jpg";

export default function Arezo() {

    const name = "Friday Grooming Co."
    const headers = [
        "FGC Introduces",
        "Premium Products Developed",
        "& Produced in Toronto"
    ]

    const services = [
        "Brand Voice / Photography / Art Direction"
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
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="p-4 sm:p-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div style={{
                    backgroundImage: `url(${secondImage.src})`,
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
                    
                    }} className="sm:col-span-2">
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
                <div className="h-screen w-full">
                </div>
            </div>

            <div className = "my-4 sm:my-8" />

            <div style={{
                backgroundImage: `url(${fifthImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="p-4 sm:p-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div style={{
                    backgroundImage: `url(${sixthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    
                    }}>
                    <div className="h-108 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${seventhImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    
                    }}>
                    <div className="h-108 w-full">
                    </div>
                </div>
            </div>

            <div className="px-36 sm:px-48 md:px-96">
                <img src={eighthImage.src} />
            </div>

            <div className="p-4 sm:p-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div style={{
                    backgroundImage: `url(${ninthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    
                    }}>
                    <div className="h-108 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${tenthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    
                    }}>
                    <div className="h-108 w-full">
                    </div>
                </div>
            </div>

            <NextPage
                text={"Xana International"}
                href={"/case-study/xana-international"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}