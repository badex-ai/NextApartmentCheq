import React from 'react'
import NavLink from '../atom/nav'

function NavLinks() {
    const links = ['Houses','Shops','Event center','Office space','Sport center','Resorts']


    const content = links.map((link)=>(
        <NavLink linkString={link}  key={link}/>
    ))
  return (
    <div className=''>
        {content}
    </div>
  )
}

export default NavLinks