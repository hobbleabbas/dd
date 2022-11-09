import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import secondImage from "../../public/casestudies/bliss/2.png"
import thirdImage from "../../public/casestudies/bliss/3.png"
import fourthImage from "../../public/casestudies/bliss/4.png"

export default function Arezo() {

    const name = "Bliss Beginnings"

    const headers = [
        "Envisioning",
        "Blissful Moments"
    ]

    const services = [
        "Messaging / Brand Voice Development",
    ]

    const secondVideoStyle = {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '-1'
    }

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

            <div className="h-screen w-full mb-8 col-span-1">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={secondVideoStyle}
                >
                    <source src='/casestudies/bliss/1.mp4' type='video/mp4' />
                </video>
            </div>

            <div className="h-screen w-full mb-8 col-span-1">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={secondVideoStyle}
                >
                    <source src='/casestudies/bliss/bliss.mp4' type='video/mp4' />
                </video>
            </div>

            <div style={{
                backgroundImage: `url(${thirdImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="my-20 sm:my-24" />

            <div style={{
                backgroundImage: `url(${fourthImage.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="my-20 sm:my-24" />

            <div style={{
                backgroundImage: `url(${secondImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>


            
            <NextPage
                text={"FELDSTEIN FAMILY LAW"}
                href={"/case-study/feldstein-family-law"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}