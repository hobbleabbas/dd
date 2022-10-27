import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";

export default function Arezo() {

    const name = "Möbel"
    const headers = [
        "A Lifestyle: Imagining A",
        "Better Place"
    ]

    const services = [
        "UI/UX / Video / Advertising / Messaging",
        "Art Direction / Digital Design / Brand Voice",
        "Social Media"
    ]

    return (
        <div>
            <Navbar />
            <div className="px-8 sm:px-16 flex flex-col">
                <h1 className="flex items-center text-sm tracking-widest justify-center font-semibold">{name}</h1>
                <div className="my-8 sm:my-12" />
                {headers.map((header) => (
                    <p className="text-6xl font-medium">{header}</p>
                ))}
                <div className="my-6 sm:my-8" />
                <h4 className="mb-2 uppercase text-gray-400 tracking-widest font-regular text-lg">Services</h4>
                {services.map((service)=>(
                    <p className="text-lg">{service}</p>
                ))}
            </div>
            
            <NextPage
                text={"Dewji Realty"}
                href={"/case-study/dewji-realty"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}