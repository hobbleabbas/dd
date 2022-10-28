import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NextPage({ text, href, dark }) {
    return (
        <Link href={href}>
            <div className={classNames(dark ? "bg-black text-white" : "", "cursor-pointer items-center align-center tracking-widest text-lg font-light font-montserrat  uppercase px-16 py-8 w-full flex justify-between")}>
                <p className="font-montserrat ">Next Page: <span className="font-medium">{text}</span></p>
                <div>
                    <div className={classNames(dark ? "border-white" : "border-black", "border border-1 shadow p-2")}>
                        <ArrowDownIcon className="font-bold w-5 h-5" />
                    </div>
                </div>
            </div>
        </Link>
    )
}