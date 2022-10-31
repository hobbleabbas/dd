import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import firstImage from "../../public/casestudies/maison/1.jpg"
import secondImage from "../../public/casestudies/maison/2.jpg"
import thirdImage from "../../public/casestudies/maison/3.jpg"
import fourthImage from "../../public/casestudies/maison/4.jpg"
import fifthImage from "../../public/casestudies/maison/5.jpg"
import sixthImage from "../../public/casestudies/maison/6.png"
import seventhImage from "../../public/casestudies/maison/7.jpg"
import eighthImage from "../../public/casestudies/maison/8.png"
import ninthImage from "../../public/casestudies/maison/9.png"
import tenthImage from "../../public/casestudies/maison/10.jpg"
import eleventhImage from "../../public/casestudies/maison/11.png"
import Indexsplash2 from "../../public/indexsplash2.png"

export default function Arezo() {

    const name = "MAISON DE FLEURS"
    const headers = [
        "Blossoming Aesthetics",
        "A Floral Shop On A Mission"
    ]

    const services = [
        "Brand Identity / Brand Voice",
        "Messaging / Social Media",
        "Marketing Collateral"
    ]

    const secondVideoStyle = {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '-1'
    }

    const thirdVideoStyle = {
        position: 'absolute',
        right: '0',
        bottom: '0',
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        zIndex: '-100',
        backgroundSize: 'cover',
        overflow: 'hidden',
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

            <div className="my-8 sm:my-12" />

            <div style={{
                backgroundImage: `url(${secondImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>


            <div className="my-8 sm:my-12" />

            <div style={{
                backgroundImage: `url(${thirdImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="my-8 sm:my-12" />

            <div style={{
                backgroundImage: `url(${fourthImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 p-8 sm:p-12 gap-8">
                <div>

                    <div className="h-160 w-full mb-8 col-span-1">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={secondVideoStyle}
                        >
                            <source src='/casestudies/maison/5.mp4' type='video/mp4' />
                        </video>
                    </div>

                    <div style={{
                        backgroundImage: `url(${eighthImage.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }} className="col-span-1">
                        <div className="h-128 w-full mb-8">
                        </div>
                    </div>

                    <div style={{
                        backgroundImage: `url(${tenthImage.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }} className="col-span-1">
                        <div className="h-160 w-full mb-8">
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{
                        backgroundImage: `url(${sixthImage.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }} className="col-span-1">
                        <div className="h-96 w-full mb-8">
                        </div>
                    </div>

                    <div className="h-128 w-full mb-8 col-span-1">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={secondVideoStyle}
                        >
                            <source src='/casestudies/maison/7.mp4' type='video/mp4' />
                        </video>
                        <div style={{
                            backgroundImage: `url(${seventhImage.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }} className="col-span-1">
                            <div className="h-148 w-full mb-8">
                            </div>
                        </div>
                    </div>

                    <div style={{
                        backgroundImage: `url(${ninthImage.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }} className="col-span-1">
                        <div className="h-96 w-full mb-8">
                        </div>
                    </div>

                    <div style={{
                        backgroundImage: `url(${eleventhImage.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }} className="col-span-1">
                        <div className="h-120 w-full mb-8">
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${Indexsplash2.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            
            <NextPage
                text={"OLIVE TREE JEWELRY"}
                href={"/case-study/olive-tree-jewelry"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}