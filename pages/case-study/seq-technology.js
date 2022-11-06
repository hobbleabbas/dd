import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import firstImage from "../../public/casestudies/seq/1.png";
import secondImage from "../../public/casestudies/seq/2.png";
import thirdImage from "../../public/casestudies/seq/3.png";
import fourthImage from "../../public/casestudies/seq/4.png";

export default function SEQ() {

    const name = "SEQ Technology"

    const headers = [
        "Automations & Digital",
        "Transformations - ",
        "Working Through Exceedingly",
        "Complex Technical Challenges"
    ]

    const services = [
        "Messaging / Brand Voice Development",
    ]

    const secondVideoStyle = {
        width: '100vw',
        height: '100vh',
        objectFit: 'contain',
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

            <div style={{
                backgroundImage: `url(${firstImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="my-12 sm:my-16 flex justify-center">
                <div className = "grid sm:grid-cols-2 sm:gap-16 w-1/2">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        textAlign: 'center',
                    }}>
                        <div style={{
                            display: 'inline-block',
                            position: 'relative',
                        }}>
                            {/* <div className="absolute w-full hover:backdrop-blur-sm h-full flex justify-center align-center items-center uppercase text-white text-8xl font-semibold tracking-widest">Play</div> */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={secondVideoStyle}
                                className="w-full h-full"
                            >
                                <source src='/casestudies/seq/5.mp4' type='video/mp4' />
                            </video>
                            
                        </div>
                    </div>

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={secondVideoStyle}
                    >
                        <source src='/casestudies/seq/6.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${secondImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="my-20 sm:my-24">
                <div style={{
                    backgroundImage: `url(${thirdImage.src})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    
                    }}>
                    <div className="h-screen w-auto">
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


            
            
            <NextPage
                text={"PRIME TIME MESSENGER"}
                href={"/case-study/prime-time-messenger"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}