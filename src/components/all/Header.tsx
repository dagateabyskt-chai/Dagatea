"use client"
import ThemeToggle from '../ThemeToggler'
import Image from 'next/image'
import logo from "../../../public/images/logo.png"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Leaf, Menu } from 'lucide-react'
import { useState } from 'react'

const paths = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Products",
      path: "/products"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Brewguide",
      path: "/brewguide"
    },
    {
      name: "Contact",
      path: "/contact"
    },
  ]
  
const Header = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false)
  const pathname = usePathname();

  return (
    <header className='max-w-full fixed top-0 left-0 right-0 z-50 w-full px-2 py-2 border-b border-b-zinc-400 bg-transparent backdrop-blur-md'>
      <div className="mx-auto max-w-400 flex justify-between items-center flex-wrap">
        <Link href="/" className='inline-flex items-center flex-col'>
          <div className='w-14 h-auto rounded-full overflow-hidden'>
            <Image 
              src={logo} 
              alt="Logo" 
              className='object-contain w-full h-full'
              loading="eager"
            />
          </div>
          <div className="dark:text-white/30 text-black/30">
            <span>DagaTea</span>
            <Leaf className="inline w-4 h-4" />
          </div>
        </Link>
        <ul className="hidden md:flex gap-4 text-lg font-bold font-serif text-[#f6eee0]">
          {paths.map((p, i) => {
            return (
              <li key={i}>
                <Link href={p.path} className={`${pathname === p.path ? "text-amber-600" : "dark:text-[#f6eee0] text-[#372104]"} `}>
                  {p.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="flex gap-2">
          <ThemeToggle/>
          <Menu aria-label="Open menu" onClick={() => {setIsAsideOpen(true)}} className='md:hidden' />
          {isAsideOpen && <Asidebar setIsAsideOpen={setIsAsideOpen} />}
        </div>
      </div>
    </header>
  )
}

export default Header

type AsidebarProps = {
  setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Asidebar: React.FC<AsidebarProps> = ({ setIsAsideOpen }) => {
  const pathname = usePathname();

  return (
    <aside role="menu" className="h-screen z-40 w-[75vw] max-w-75 absolute right-0 bottom-0 top-19 bg-[#f7ead3]/90 dark:bg-amber-950/90">
      <div className="p-8 text-amber-900 dark:text-[#f6eee0]">
        <button aria-label="Close menu" onClick={() => {setIsAsideOpen(false)}} className="text-3xl text-left border px-3 py-1 rounded">X</button>
        <ul className="flex flex-col gap-4 text-3xl font-bold font-serif text-amber-900 dark:text-[#f6eee0] text-center py-5">
          {paths.map((p, i) => {
            return (
              <li key={i} className='bg-amber-950/5 dark:bg-[#f6eee0]/10 rounded-md py-1 px-2.5'>
                <Link onClick={() => {setIsAsideOpen(false)}} href={p.path} className={`${pathname === p.path ? "text-amber-600" : "text-amber-900 dark:text-[#f6eee0]"}`}>
                  {p.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}