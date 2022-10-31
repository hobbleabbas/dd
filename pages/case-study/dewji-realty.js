import Footer from "../../components/Footer";
import LoadingSpinner from "../../components/LoadingSpinner";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";

export default function Arezo() {

    const name = "Dewji Realty"
    const headers = [
        "Personalized Brand",
        "Reflecting Individuality"
    ]

    const services = [
        "Video / Art Direction",
        "Messaging / Brand Voice Development",
        "Social Media"
    ]

    const videoStyle = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'absolute',
        left: '50%', /* % of surrounding element */
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1'
      }
    
      const secondVideoStyle = {
        width: '100vw',
        height: '100vh',
        objectFit: 'fill',
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

      const pStyle = {
        position: 'absolute',
        textAlign: 'center',
        fontSize: '4em',
        zIndex: '9999',
        color: 'white',
        top: '50%',
        left:'50%',
        transform: 'translate(-50%,-50%)',
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

            <a href="https://www.youtube.com/watch?v=A3LaRXxoTwY" target="_blank">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={secondVideoStyle}
                    className="hover:blur-md transition ease-in-out cursor-pointer"
                >
                    <source src='/casestudies/dewji/2.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                </video>
            </a>

            
            <NextPage
                text={"MAISON DE FLEURS"}
                href={"/case-study/maison-de-fleurs"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}