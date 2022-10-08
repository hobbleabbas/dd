import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function DDLink({ text, href, dark }) {
    return (
        <Link href = {href}>
            <a href = {href} className={classNames(
                    dark ? 'text-white underline' : 'text-slate-800 underline',
                    'uppercase font-medium hover:opacity-50 underline-offset-8 hover:transition delay-50 text-sm'
                )}>
                { text }
            </a>
        </Link>
    )
}