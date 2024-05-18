"use client"
import { Link } from "@/navigation"
import { usePathname } from "@/navigation"
function LangSelector({ locale }: { locale: string }) {
    const pathname = usePathname()
    return (
        <Link href={pathname} key={locale} className=" no-underline hover:underline" prefetch locale={locale}>
            {locale}
        </Link>
    )
}

export default LangSelector
