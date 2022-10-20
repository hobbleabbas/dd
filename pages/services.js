import Image from "next/image";
import Footer from "../components/Footer";
import { DDLink } from "../components/Link";
import Navbar from "../components/Navbar";
import { SubTitle } from "../components/Title";

export default function Work() {
    return (
        <div className="h-full">
            <Navbar />
            <div className="py-48 flex flex-col items-center w-full justify-center align-center">
                <p className="text-xl text-slate-800 uppercase font-semibold mb-8">Our Services</p>
                <img src={"/surface.png"} className="w-3/4 h-auto" />
            </div>
            <div className="grid grid-cols-2 p-16">
                 <div className="px-24">
                    <p className="text-sm font-regular text-slate-700 uppercase">Services</p>
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
                     </div>
                 </div>
             </div>


            <div className="my-16" />

            <Footer dark={false}/>
        </div>
    )
}