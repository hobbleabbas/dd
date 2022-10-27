import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NextPage from "../../components/Nextpage";

export default function Arezo() {

    const name = "SHēK"
    const headers = [
        "A New Breakthrough",
        "to Women’s Fashion"
    ]

    const services = [
        "Web Design / Social Media / Digital Design"
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
                text={"MöBEL"}
                href={"/case-study/mobel"}
                dark={false}
            />
                
            <Footer />
        </div>
    )
}