import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SubTitle } from "../components/Title";

export default function About() {
    return (
        <div className="bg-black h-full text-white">
            <Navbar dark={true} />
            <div className="py-48 flex flex-col items-center w-full justify-center align-center">
                <img src={"/aboutus.png"} className="w-1/2 h-auto" />
            </div>
            <div className="grid grid-cols-2 p-16">
                <SubTitle text={"Services"} dark={true} />
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

            <div className="grid grid-cols-2 p-16 mb-48">
                <SubTitle text={"Selected Clients"} dark={true} />
                <div className="grid grid-cols-2 gap-8 font-medium">
                </div>
            </div>
            <Footer dark={true}/>
        </div>
    )
}