import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { DDLink } from "../components/Link";
import Navbar from "../components/Navbar";
import { SubTitle } from "../components/Title";

export default function Contact() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar dark={true} />
            <div className="py-16 flex flex-col items-center w-full justify-center align-center">
                <p className="uppercase font-extralight text-md tracking-widest">Contact</p>
            </div>

            <div className="text-center px-72 flex flex-col justify-center items-center">
                <img src="/contact.png" className="flex w-full h-auto" />
            </div>

            <div className="my-16" />

            <div className="grid grid-cols-4 px-16 gap-16 uppercase">
                <div className="col-span-1">
                    <p className="text-xs font-extralight tracking-wider">General Inquiries</p>
                    <p className="text-md mt-2 font-bold tracking-wide"><Link href="mailto:info@digital-dash.ca"><a>info@digital-dash.ca</a></Link></p>
                    <p className="text-md font-bold tracking-wide"><Link href="tel:647-271-4600"><a>+1 647 271 4600</a></Link></p>
                </div>
                <div className="col-span-1">
                    <p className="text-xs font-extralight tracking-wider">New Business</p>
                    <p className="text-md mt-2 font-bold tracking-wide"><Link href="mailto:info@digital-dash.ca"><a>info@digital-dash.ca</a></Link></p>
                </div>
            </div>

            <div className="my-24" />

            <Footer dark={true}/>
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