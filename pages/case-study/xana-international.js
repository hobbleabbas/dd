import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";

export default function Arezo() {

    const name = "Xana International"
    const headers = [
        "Hospitality to Residential:",
        "A Look into Canada’s",
        "Greatest Renovated Spaces"
    ]

    const services = [
        "Video / Social Media / Art Direction"
    ]

    const videoStyle = {
        width: '100vw',
        height: 'auto',
        objectFit: 'cover',
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

            <a href="https://www.youtube.com/watch?v=-L5CxORZIss" rel="noreferrer" target="_blank">
                <div style={{
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                }}>
                    <div style={{
                        display: 'inline-block',
                        position: 'relative',
                    }}>
                        <div className="absolute w-full h-full hover:backdrop-blur-sm flex justify-center align-center items-center uppercase text-white text-8xl font-semibold tracking-widest">Play</div>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={videoStyle}
                        >
                            <source src='/casestudies/xana/1.mp4' type='video/mp4' />
                                Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </a>

            <div className="my-20 sm:my-24 flex justify-center">
                <div className="w-2/3  grid grid-cols-1 sm:grid-cols-3 gap-16">
                    <a className="text-center relative" target="_blank" href="https://www.youtube.com/watch?v=Oj5kGOI93Ts" rel="noreferrer">
                        <img src="/casestudies/xana/1.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a className="text-center relative" target="_blank" href="https://www.youtube.com/watch?v=gTkBaXPw9JA" rel="noreferrer">
                        <img src="/casestudies/xana/2.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a className="text-center relative" target="_blank" href="https://www.youtube.com/watch?v=L7eFx7KSCRo" rel="noreferrer">
                        <img src="/casestudies/xana/3.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                </div>
            </div>

            

            <a href="https://www.youtube.com/watch?v=1Yb1L-1O9cE" rel="noreferrer" target="_blank">
                <div style={{
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                }}>
                    <div style={{
                        display: 'inline-block',
                        position: 'relative',
                    }}>
                        <div className="absolute w-full h-full hover:backdrop-blur-sm flex justify-center align-center items-center uppercase text-white text-8xl font-semibold tracking-widest">Play</div>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={videoStyle}
                        >
                            <source src='/casestudies/xana/2.mp4' type='video/mp4' />
                                Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </a>
            
            <NextPage
                text={"Bliss Beginnings"}
                href={"/case-study/bliss-beginnings"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}