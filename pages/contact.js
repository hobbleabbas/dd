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
                <p className="uppercase font-regular text-lg tracking-widest">Contact</p>
            </div>

            <div className="text-center px-12 sm:px-24 md:px-36 lg:px-72 flex flex-col justify-center items-center">
                <img src="/contact.png" className="flex w-full h-auto" />
            </div>

            <form method="POST" action="https://getform.io/f/e09db19a-dfe8-46de-8932-a0eba7d4dbc9" className="flex flex-col space-y-6 px-12 sm:px-24 md:px-36 my-16 mb-1">
                <Input type="text" name="name" placeholder="Tiger Woods" label = "Your full name *" required = {true} />
                <Input type="email" name="email" placeholder="tiger@golf.com" label = "The best email you can be reached at *" required = {true} />
                <Input type = "text" name="subject" placeholder={"Content creation, website design"} label = "What are you interested in? *" required = {true} />
                <div>
                    <label htmlFor="label" className="text-white text-sm uppercase font-semibold">Message (Optional)</label>
                    <textarea 
                        type="text"
                        rows={5}
                        name="message"
                        placeholder="Message"
                        className=" w-full text-slate-800 font-medium  border border-slate-500 focus:outline-none focus:border-1 focus:border-slate-800 p-4 mt-2"
                    />
                </div>
                <button className="hover:bg-gray-100 bg-white text-black font-semibold uppercase tracking-widest py-3 px-4">Send Message</button>
            </form>

            <div className="my-16 sm:my-32" />

            <div className="grid sm:grid-cols-4 px-16 gap-16 uppercase">
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

export function Input({ type, name, required, placeholder, label }) {
    return (
        <div>
            <label htmlFor="label" className="text-white text-sm uppercase font-semibold">{label}</label>
            {required ?
            
            <input 
                type={type}
                name={name}
                required
                placeholder={placeholder}
                className=" w-full h-12 text-slate-800 font-medium  border border-slate-500 focus:outline-none focus:border-1 focus:border-slate-800 p-4 mt-2"
            />
        
            :
            
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                className=" w-full h-12 text-slate-800 font-medium  border border-slate-500 focus:outline-none focus:border-1 focus:border-slate-800 p-4 mt-2"
            />
            }
        </div>
    )
}