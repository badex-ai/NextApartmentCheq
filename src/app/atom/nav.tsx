import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({linkString}: {linkString: string}) {

   const pathname = usePathname()
  return (
    <nav className={`link ${pathname == linkString ? 'active' : ''} `}>
        <Link href={`/${linkString}`}>
        {linkString}
        </Link>
        </nav>
  )
}

export default NavLink