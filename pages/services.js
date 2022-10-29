import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NextPage from "../components/Nextpage";

export default function Services() {
    return (
        <div className="h-full">
            <Navbar />
            <div className="py-36 flex flex-col items-center w-full justify-center align-center">
                <p className="font-montserrat text-xl text-slate-800 uppercase font-semibold mb-8">Our Services</p>
                <img src={"/surface.png"} className="w-3/4 h-auto" />
            </div>
            <div className="grid sm:grid-cols-2 p-16">
                 <div className="sm:px-24 mb-8 sm:mb-0">
                    <p className="font-montserrat tracking-widest text-sm font-medium text-slate-700 uppercase">Services</p>
                 </div>
                 <div className="grid grid-cols-2 gap-8 font-medium">
                     <div>
                         <p>Brand Strategy</p>
                         <p>Packaging Design</p>
                         <p>Brand Identity Design</p>
                         <p>Brand Voice</p>
                         <p>Art Direction</p>
                         <p>Video</p>
                     </div>
                     <div>
                         <p>Messaging Strategy</p>
                         <p>Editorial Design</p>
                         <p>Marketing Collateral</p>
                         <p>Digital Design</p>
                         <p>Social Media Management</p>
                         <p>Advertising</p>
                         <p>Photography</p>
                         <p>Web Development</p>
                     </div>
                 </div>
             </div>


            <div className="my-16" />

            <div className="font-montserrat">
                <NextPage 
                    text="Minds @ Work"
                    href="/humans"
                />
            </div>

            <Footer dark={false}/>
        </div>
    )
}