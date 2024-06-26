import React from 'react'
import { MenuItem } from '@/types'
import { menuList } from '@/constants/'
import { Link, pathnames } from '@/navigation'
import { getTranslator } from '@/lib'
import { locales } from '@/navigation'
import LangSelector from './LangSelector'

const NavBar: React.FC = async () => {
    const { t, locale } = await getTranslator('Navigation')

    const menuItems: JSX.Element[] = menuList.map((menu: MenuItem, index: number) =>

        <Link href={menu.url} key={menu.url} className=" no-underline hover:underline" prefetch locale={locale}>
            {t(menu.text)}
        </Link>

    )
    const localesList = locales.map((locale, index: number) =>
        <LangSelector key={index} locale={locale} />
    )

    return (

        <div className="flex justify-between p-3">
            <div className='flex p-4 gap-4 '>{menuItems}</div>
            <div className='flex p-4 gap-4'>{localesList}</div>
        </div>
    )
}

export default NavBar
