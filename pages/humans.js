import Footer from "../components/Footer";
import { DDLink } from "../components/Link";
import Navbar from "../components/Navbar";
import humanssplash from "../public/humanssplash.png"

export default function Humans() {
    return (
        <div>
            <Navbar dark={false} />
            <div className="pt-36 pb-24 flex flex-col items-center w-full justify-center align-center">
                <img src={"/mindsatwork.png"} className="w-4/5 h-auto" />
                <img src={"/resilient.png"} className="w-3/4 h-auto mt-8" />
            </div>
            <div className="grid grid-cols-3 gap-4 p-16">
                <PersonCard
                    name = "Sarfaraaz Kara"
                    title="CEO"
                    picture="/sarfaraaz.png"
                />
                <PersonCard
                    name = "Sana Saidi"
                    title="Creative Director"
                    picture="/sana1.png"
                />
                <PersonCard
                    name = "Sana Saidi"
                    title="Research Coodinator"
                    picture="/sana2.png"
                />
            </div>

            <div style={{
                backgroundImage: `url(${humanssplash.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                <div className="h-screen w-full">
                </div>
            </div>

            <Footer dark={false}/>
        </div>
    )
}

export function PersonCard({ name, title, picture }) {
    return (
        <div>
            <img
                src={picture}
                width="full"
                height="auto"
            />
            <p className="mt-8 font-semibold text-lg">{ name }</p>
            <p className="mt-1 mb-4 font-regular text-md uppercase">{ title }</p>
            <DDLink href={"#"} text="Read Bio" defaultUnderlined={true} />
        </div>
    )
}