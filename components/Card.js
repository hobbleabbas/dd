import { DDLink } from "./Link";
import { MainTitle, SubTitle } from "./Title";

export function Card({ dark, title, sub_title, link_text, link_href, image_src }) {
    return (
        <div className="p-6 flex flex-col content-between">
            <div className="content-start">
                <img src={`/card-images/${image_src}`} className="w-full" />
                <div className="m-4" />
                <SubTitle text={sub_title} />
                <div className="m-3" />
                <h3 className="text-slate-800 capitalize text-3xl lg:text-4xl font-medium">{ JSON.parse(title).map((titleSection)=>(
                    <span>{titleSection} <br /></span>
                )) }</h3>
            </div>
            <div className="m-4" />
            <div className="content-end">
             <DDLink text={link_text} href={link_href} defaultUnderlined={true} />
            </div>
        </div>
    )
}