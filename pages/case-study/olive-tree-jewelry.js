import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";
import firstImage from '../../public/casestudies/olive/1.png'
import secondImage from '../../public/casestudies/olive/2.png'
import thirdImage from '../../public/casestudies/olive/3.png'

export default function Arezo() {

    const name = "Olive Tree Jewelry"
    const headers = [
        "Jewelry that Reflects",
        "Who You Are & Where",
        "You Are From"
    ]

    const services = [
        "Photography / Video",
        "Social Media / Art Direction"
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
                }} className="">
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="my-20 sm:my-24" />

            <div className="my-20 sm:my-24 flex justify-center">
                <div className="w-2/3  grid grid-cols-1 sm:grid-cols-3 gap-16">
                    <a className="text-center relative" href="https://www.youtube.com/shorts/MwI_ZzTMBY4" rel="noreferrer">
                        <img src="/casestudies/olive/4.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a className="text-center relative" href="https://www.youtube.com/shorts/ZO0IfyA-ACE" rel="noreferrer">
                        <img src="/casestudies/olive/5.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a className="text-center relative" href="https://www.youtube.com/shorts/nfJ-mQ7gBVw" rel="noreferrer">
                        <img src="/casestudies/olive/6.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${secondImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: '100%',
                height: 'auto',
                aspectRatio:'16/9',
                }} className="">
                <div className="h-screen w-full">
                </div>
            </div>

            <div className="my-20 sm:my-24 flex justify-center">
                <div className="w-2/3  grid grid-cols-1 sm:grid-cols-3 gap-16">
                    <a className="text-center relative" href="https://www.youtube.com/shorts/VWYRhJbZ80A" rel="noreferrer">
                        <img src="/casestudies/olive/7.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a className="text-center relative" href="https://www.youtube.com/shorts/tw7kAk9hSI0" rel="noreferrer">
                        <img src="/casestudies/olive/8.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a className="text-center relative" href="https://www.youtube.com/shorts/jc0OpBFaIKA" rel="noreferrer">
                        <img src="/casestudies/olive/9.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                </div>
            </div>

            <div className="my-20 sm:my-24" />

            <div style={{
                backgroundImage: `url(${thirdImage.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: '100%',
                height: 'auto',
                }} className="">
                <div className="w-full h-screen lg:h-256">
                </div>
            </div>



            
            <NextPage
                text={"MAISON DE FLEURS"}
                href={"/case-study/maison-de-fleurs"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}