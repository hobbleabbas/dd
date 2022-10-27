import Footer from "../../components/Footer";
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
            
            <NextPage
                text={"MAISON DE FLEURS"}
                href={"/case-study/maison-de-fleurs"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}