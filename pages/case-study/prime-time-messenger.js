import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import fifthImage from "../../public/casestudies/prime/5.png"
import sixthImage from "../../public/casestudies/prime/6.jpg"
import seventhImage from "../../public/casestudies/prime/7.jpg"
import eighthImage from "../../public/casestudies/prime/8.jpg"

export default function Arezo() {

    const name = "Prime Time Messenger"
    const headers = [
        "A Calculated Risk Turned",
        "Into An Innovative Brand"
    ]

    const services = [
        "Video / Social Media",
        "Website Development / Digital Design",
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
                    <source src='/casestudies/prime/1.mp4' type='video/mp4' />
                </video>
            </div>

            <div className="my-20 sm:my-24 flex justify-center">
                <div className="w-2/3  grid grid-cols-1 sm:grid-cols-3 gap-16">
                    <a className="text-center relative" href="https://youtube.com/shorts/IAqulXdt6m4?feature=share" rel="noreferrer">
                        <img src="/casestudies/prime/2.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-extrabold text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a className="text-center relative" href="https://youtube.com/shorts/CtBQdOH9yCU?feature=share" rel="noreferrer">
                        <img src="/casestudies/prime/3.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-extrabold text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a className="text-center relative" href="https://youtube.com/shorts/_SSKGcIrFv8?feature=share" rel="noreferrer">
                        <img src="/casestudies/prime/4.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-extrabold text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${fifthImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
                }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="p-8 sm:p-16 md:p-32 lg:p-48">
                <div style={{
                    backgroundImage: `url(${sixthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-160 w-full">
                    </div>
                </div>
            </div>

            <div className = "my-6 sm:my-8 grid sm:grid-cols-2 gap-8">
                <div style={{
                    backgroundImage: `url(${seventhImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-96 w-full">
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url(${eighthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                    }}>
                    <div className="h-96 w-full">
                    </div>
                </div>
            </div>


            <NextPage href="/contact" text={"Contact"} />
            <Footer />
        </div>
    )
}