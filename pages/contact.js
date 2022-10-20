import Image from "next/image";
import Footer from "../components/Footer";
import { DDLink } from "../components/Link";
import Navbar from "../components/Navbar";
import { SubTitle } from "../components/Title";

export default function Contact() {
    return (
        <div className="h-full">
            <Navbar />
            <div className="py-36 flex flex-col items-center w-full justify-center align-center">
                <p className="text-xl text-slate-800 uppercase font-semibold mb-8">Contact Us</p>
                <p className="text-light text-slate-700 text-md uppercase">Get In Touch With Digital Dash today, and let us take your brand to the next level.</p>
            
            </div>
           <div className="flex justify-center">
                <div className="flex flex-col w-1/2">
                    <Input
                        placeholder="Tiger Woods"
                        label={"Full Name"}
                    />
                    <div className="mt-8" />
                    <Input
                        placeholder="Arezomarketing.com"
                        label={"Website"}
                    />
                    <div className="mt-8" />
                    <Input
                        placeholder="Arézo"
                        label={"Your Company"}
                    />
                    <div className="mt-8" />
                    <div>
                        <label htmlFor="location" className="text-slate-700 text-sm uppercase font-semibold">
                            Service
                        </label>
                        <select
                            id="service"
                            name="service"
                            className="uppercase font-semibold text-slate-700 mt-1 block w-full border-slate-500 py-3 pl-3 pr-10 text-base focus:border-slate-800 focus:outline-none focus:ring-slate-800 sm:text-sm"
                        >
                            <option>Website Creation</option>
                            <option>Brand Strategy</option>
                            <option>Packaging Design</option>
                            <option>Brand Identity Design</option>
                            <option>Brand Voice</option>
                            <option>Art Direction</option>
                            <option>Video</option>
                            <option>Messaging Strategy</option>
                            <option>Editorial Design</option>
                            <option>Marketing Collateral</option>
                            <option>Digital Design</option>
                            <option>Social Media Management</option>
                            <option>Advertising</option>
                            <option>Photography</option>
                        </select>
                    </div>
                    <div className="mt-8" />
                    <button
                        type="submit"
                        className="bg-slate-800 text-white uppercase font-semibold py-3 px-6 hover:bg-slate-700 transition duration-200 ease-in-out"
                    >
                        Let&apos;s Talk
                        <span className="ml-2">&rarr;</span>
                    </button>

                </div>
           </div>


            <div className="my-16" />

            <Footer dark={false}/>
        </div>
    )
}

export function Input({ placeholder, label }) {
    return (
        <div>
            <label htmlFor="label" className="text-slate-700 text-sm uppercase font-semibold">{label}</label>
            <input 
                type="text"
                placeholder={placeholder}
                className="uppercase w-full h-12 border border-slate-500 focus:outline-none focus:border-1 focus:border-slate-800 p-4 mt-2"
            />
        </div>
    )
}