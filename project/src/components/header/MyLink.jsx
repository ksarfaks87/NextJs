import Link from "next/link";

export default function MyLink({href, children, styleName}) {
    return(
        <Link href={href}>
            <a className={styleName}>{children}</a>
        </Link>
    )
}