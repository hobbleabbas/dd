import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";

export default function Arezo() {

    const name = "Feldstein Family Law"

    const headers = [
        "Amplifying The Desire To",
        "Feel Great"
    ]

    const services = [
        "Video / Social Media",
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

            <div className="my-20 sm:my-24 flex justify-center">
                <div className="w-2/3  grid grid-cols-1 sm:grid-cols-3 gap-16">
                    <a href="https://www.youtube.com/watch?v=XmWSPoJJw3c" className="text-center relative bg-white h-108 w-[13rem] md:h-144 md:w-[17rem]">
                        <img src="/casestudies/feldstein/1.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-extrabold text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a href="https://www.youtube.com/watch?v=fkS10Odb7Oc" className="text-center relative bg-white h-108 w-[13rem] md:h-144 md:w-[17rem]">
                        <img src="/casestudies/feldstein/2.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-extrabold text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a href="https://www.youtube.com/watch?v=JLPVSnmA0F4" className="text-center relative bg-white h-108 w-[13rem] md:h-144 md:w-[17rem]">
                        <img src="/casestudies/feldstein/3.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-extrabold text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                </div>
            </div>

            <div className="my-20 sm:my-24 flex justify-center">
                <div className="w-1/2  grid grid-cols-1 sm:grid-cols-2 gap-16">
                    <a href="https://www.youtube.com/watch?v=89HqUeqgh34" className="text-center relative bg-white h-108 w-[13rem] md:h-144 md:w-[17rem]">
                        <img src="/casestudies/feldstein/4.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                    <a href="https://www.youtube.com/watch?v=fy6TDQBtvlI" className="text-center relative bg-white h-108 w-[13rem] md:h-144 md:w-[17rem]">
                        <img src="/casestudies/feldstein/5.png" className="col-span-1 hover:blur-sm" />
                        <p style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            }} className='text-white uppercase font-semibold tracking-wider text-3xl sm:text-4xl lg:text-6xl'>Play</p>
                    </a>
                </div>
            </div>

            <NextPage
                text={"SEQ TECHNOLOGY"}
                href={"/case-study/seq-technology"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}