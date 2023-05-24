/* eslint-disable react/jsx-key */

import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const NavLinks = [
    {
        id: 1,
        name: 'Home',
        link: 'home',
    },
    {
        id: 2,
        name: 'Services',
        link: 'services',
    },
    {
        id: 3,
        name: 'Reviews',
        link: "reviews",
    },
    {
        id: 4,
        name: 'Contact',
        link: 'contact',
    },
]

const [open, setOpen] = useState(false)

const showMenu = () => {
  setOpen(!open)
}

  return (
    <div className="sticky top-0 left-0 right-0 h-[12vh] lg:h-[15vh] flex items-center justify-center opacity-100 z-[200] shadow-lg bg-white/50">
    <nav className="max-container flex justify-between items-center  pt-5 ">
      <div className="flex flex-col text-center">
         <h1 className="font-bold tracking-wide text text-[30px] sm:text-[25px]">HOME CARE</h1>
         <p className="text-gray-400 text-[30px] sm:text-[25px] tracking-wider">AGENCY</p>
      </div>

      <ul className="list-none flex lg:hidden uppercase items-center justify-center cursor-pointer">
        {NavLinks.map((nav) => (
          <a href={nav.link} target="_parent" rel="noreferrer">
            <li key={nav.id} className={`ml-[20px] text-[25px] list`}>{nav.name}</li>
            </a>
        ))}
      </ul>

      <div className='hidden fixed right-0 lg:flex pr-[20px]'>
                {open ? <CloseIcon fontSize='large' className='z-[200] cursor-pointer' onClick={showMenu} /> :<MenuIcon fontSize='large' onClick={showMenu} className='z-[200] cursor-pointer' />} 
                <ul className={open ? `flex flex-col  fixed justify-center items-center inset-0 uppercase cursor-pointer bg-black/70 backdrop-blur-lg text-[20px] w-full h-screen  gap-8` : `hidden`}>
                {
                    NavLinks.map((nav)=> (
                      <a href={nav.link} target="_parent" rel="noreferrer">
                        <li key={nav.id} id={nav.link} className={`text-white`}>{nav.name}</li>
                      </a>
                    ))
                }
                </ul>
            </div>
    </nav>
    </div>
  )
}

export default Navbar