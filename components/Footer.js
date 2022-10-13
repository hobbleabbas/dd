import { DDLink } from "./Link"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer({ dark }) {
    return (
        <div className="px-16 py-8">
            <div className="grid grid-cols-2 gap-0">
                <div className="col-span-1 prose">
                    © 2022
                </div>
                <div className="col-span-1 prose">
                    <div className="max-w-sm">
                        <p>Have a new project in mind? Or want to learn more about what we do? Please get in touch.</p>
                        <DDLink dark={dark} text="Contact us" href={"mailto:info@digital-dash.ca"} />
                    </div>
                    <div className="mt-16">
                        <DDLink dark={dark} text="Instagram" href={"https://www.instagram.com/digitaldashteam/"} /> | <DDLink dark={dark} text="Linkedin" href={"https://www.linkedin.com/company/digitaldashteam"} /> | <DDLink dark={dark} text="Twitter" href={"https://twitter.com/DigitalDashTeam"} />
                    </div>
                </div>
            </div>
        </div>
    )
}