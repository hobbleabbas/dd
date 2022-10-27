import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function DDLink({ text, href, dark, defaultUnderlined }) {
    return (
        <Link href = {href}>
            <a href = {href} className={classNames(
                    (dark && defaultUnderlined) ? 'text-white underline' : (!dark && defaultUnderlined) ? 'text-slate-800 underline-2 underline' : (dark && !defaultUnderlined) ? 'no-underline text-white' : 'no-underline text-slate-800',
                    'uppercase font-medium hover:opacity-50 underline-offset-8 hover:transition delay-50 text-xs'
                )}>
                { text }
            </a>
        </Link>
    )
}