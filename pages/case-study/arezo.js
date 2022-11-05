import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import firstImage from "../../public/casestudies/arezo/1.png"
import secondImage from "../../public/casestudies/arezo/2.png"
import thirdImage from "../../public/casestudies/arezo/3.png"
import fourthImage from "../../public/casestudies/arezo/4.png"
import fifthImage from "../../public/casestudies/arezo/5.png"
import sixthImage from "../../public/casestudies/arezo/6.png"
import seventhImage from "../../public/casestudies/arezo/7.png"
import eighthImage from "../../public/casestudies/arezo/8.png"
import ninthImage from "../../public/casestudies/arezo/9.png"
import tenthImage from "../../public/casestudies/arezo/10.png"
import eleventhImage from "../../public/casestudies/arezo/11.png"
import twelfthImage from "../../public/casestudies/arezo/12.png"

export default function Arezo() {

    const name = "ARÉZO"

    const videoStyle = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: '-1'
      }

    const headers = [
        "Amplifying The Desire",
        "To Feel Great"
    ]

    const services = [
        "Packaging / Visual Identity",
        "Art Direction / Digital Design"
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

            <video
                autoPlay
                loop
                muted
                playsInline
                style={videoStyle}
            >
                <source src='/arezo.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
            </video>

            <div className="mx-4 md:mx-4 lg:mx-4 my-3 md:my-3 lg:my-3">
                <div className="w-full grid sm:grid-cols-3 gap-4">
                    <div style={{
                        backgroundImage: `url(${secondImage.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }} className="col-span-1">
                        <div className="h-72 w-full mb-4">
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${thirdImage.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }} className="col-span-1">
                        <div className="h-72 w-full mb-4">
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${fourthImage.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }} className="col-span-1">
                        <div className="h-72 w-full">
                        </div>
                    </div>
                </div>

                <div className="my-4" />

                <div style={{
                    backgroundImage: `url(${fifthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-128 w-full mb-4">
                    </div>
                </div>

                <div className="my-4" />

                <div style={{
                    backgroundImage: `url(${sixthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-144 w-full mb-4">
                    </div>
                </div>

                <div className="my-4" />

                <div className="w-full grid grid-cols-2 gap-4">
                    <div>
                        <div style={{
                            backgroundImage: `url(${seventhImage.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }} className="col-span-1">
                            <div className="h-96 w-full mb-4">
                            </div>
                        </div>

                        <div className="my-4" />

                        <div style={{
                            backgroundImage: `url(${ninthImage.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }} className="col-span-1">
                            <div className="h-144 w-full mb-4">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style={{
                            backgroundImage: `url(${eighthImage.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }} className="col-span-1">
                            <div className="h-192 w-full mb-4">
                            </div>
                        </div>

                        <div className="my-4" />

                        <div style={{
                            backgroundImage: `url(${tenthImage.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }} className="col-span-1">
                            <div className="h-96 w-full mb-4">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={videoStyle}
                >
                    <source src='/casestudies/arezo/11.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                </video>

                <div className="my-4" />

                <div style={{
                    backgroundImage: `url(${twelfthImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }} className="col-span-1">
                    <div className="h-144 w-full mb-4">
                    </div>
                </div>
            </div>

            <NextPage
                text={"SHēK"}
                href={"/case-study/shek"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}