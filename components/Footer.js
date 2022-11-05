import { DDLink } from "./Link"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer({ dark }) {
    return (
        <div className={classNames(dark ? "bg-black text-white" : "", "px-4 sm:px-16 py-8")}>
            <div className={classNames(dark ? "border-t border-white" : "border-t border-black", "")}>
                <div className="grid grid-cols-2 gap-0">
                    <div className={classNames(dark ? "text-white" : "text-slate-700", "text-sm col-span-1 prose py-4")}>
                        © 2022
                    </div>
                    <div className={classNames(dark ? "text-white" : "", "col-span-1 prose")}>
                        <div className="max-w-sm">
                            <p className="text-sm text-light">
                                <span>Have a new project in mind?</span><br />
                                <span className="-mt-1">Want to learn more about what we do? </span> <br />
                                <span className="-mt-1">Please get in touch.</span>
                            </p>
                            <DDLink dark={dark} text="Contact us" href={"/contact"} />
                        </div>
                        <div className="mt-16 flex flex-col sm:flex-row justify-between">
                            <div className="">
                                <DDLink dark={dark} text="Instagram" href={"https://www.instagram.com/digitaldashteam/"} /> | <DDLink dark={dark} text="Linkedin" href={"https://www.linkedin.com/company/digitaldashteam"} /> | <DDLink dark={dark} text="Twitter" href={"https://twitter.com/DigitalDashTeam"} />
                            </div>
                            <div className="">
                                <a href = "#navbar" className="no-underline uppercase text-sm font-extralight text-blue-700">Back to top</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}