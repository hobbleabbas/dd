import { DDLink } from "./Link";
import { MainTitle, SubTitle } from "./Title";

export function Card({ dark, title, sub_title, link_text, link_href, image_src }) {
    return (
        <div className="p-6">
            <img src={`/card-images/${image_src}`} className="w-full" />
            <div className="m-4" />
            <SubTitle text={sub_title} />
            <div className="m-3" />
            <MainTitle text={title} />
            <div className="m-4" />
            <DDLink text={link_text} href={link_href} defaultUnderlined={true} />
        </div>
    )
}