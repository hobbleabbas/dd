function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function MainTitle({ text, dark }) {
    return <p className={classNames(dark ? 'text-white' : 'text-slate-800',"capitalize text-3xl font-medium")}>{ text }</p>
}

export function PageTitle({ text, dark }) {
    return <p className={classNames(dark ? 'text-white' : 'text-slate-800',"flex-shrink-0 capitalize text-5xl font-medium")}>{ text }</p>
}

export function SubTitle({ text, dark , bold }) {
    return <p className={classNames(dark && bold ? "text-white font-bold" : dark && !bold ? "text-white" : !dark && bold ? "text-slate-800, font-bold" : "text-slate-800", "uppercase font-medium text-md")}>{ text }</p>
}

export function LightSubTitle({ text, dark }) {
    return <p className={classNames(dark ? "text-white" : "text-slate-800", "uppercase font-regular text-md")}>{ text }</p>
}