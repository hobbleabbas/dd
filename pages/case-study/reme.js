import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import firstImage from "../../public/casestudies/reme/1.jpg"
import secondImage from "../../public/casestudies/reme/2.jpg"
import thirdImage from "../../public/casestudies/reme/3.jpg"
import fourthImage from "../../public/casestudies/reme/4.jpg"
import fifthImage from "../../public/casestudies/reme/5.jpg"
import sixthImage from "../../public/casestudies/reme/6.jpg"
import eighthImage from "../../public/casestudies/reme/8.jpg"
import ninthImage from "../../public/casestudies/reme/9.jpg"
import tenthImage from "../../public/casestudies/reme/10.png"

export default function Arezo() {

    const name = "Remé"
    const headers = [
        "Essentials Giving",
        "Comfort."
    ]

    const services = [
        "Packaging / Art Direction / Digital Design",
        "Brand Voice / Messaging",
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

            <div className="w-2/3 grid grid-cols-2 mx-auto">
                <div style={{
                    backgroundImage: `url(${secondImage.src})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-96 w-full">
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${thirdImage.src})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-96 w-full">
                    </div>
                </div>
            </div>

            <div className="my-8 sm:my-12" />

            <div className="w-2/3 grid grid-cols-2 mx-auto">
                <div style={{
                    backgroundImage: `url(${fifthImage.src})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-96 w-full">
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${fourthImage.src})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-96 w-full">
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${eighthImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>
            
            <div style={{
                backgroundImage: `url(${ninthImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${sixthImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="sm:py-36 py-24">
                <div style={{
                    backgroundImage: `url(${tenthImage.src})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-screen w-full">
                    </div>
                </div>
            </div>
            
            <NextPage
                text={"Olive Tree Jewelry"}
                href={"/case-study/olive-tree-jewelry"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}