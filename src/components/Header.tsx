"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"
import { useEffect } from "react"
export default function Header() {
  const[open,isOpen]= useState(false)
  useEffect(()=>{
    const Isclique = (e:any)=>{
      let menu = document.getElementById('menu')

      if(menu && !menu.contains(e.target)){
        isOpen(false)
      }
    }
    document.addEventListener('mousedown',Isclique)
    return ()=>{
      document.removeEventListener('mousedown',Isclique)
    }
  },[open])
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720 && open) {
        isOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [open])
  return (
    <header className="flex flex-row justify-between  px-7 py-7 lg:px-20 lg:py-7">
      <div><Link href="/" className="font-semibold">THE TAXI</Link></div>

{/*menu pour petit ecran */}

      <nav className="lg:hidden text-white text-sm" id="menu">
        <button onClick={()=>{isOpen(()=>!open)}} className="relative" ><Menu/></button>
        <ul className={`${!open? "hidden":"flex"} flex-col absolute right-5  text-white `}>
            <li className="p-2 hover:bg-yellow-400 cursor-pointer rounded-md">About Us</li>
            <li className="p-2 hover:bg-yellow-400 cursor-pointer rounded-md">Contact Us</li>
            <li className="p-2 hover:bg-yellow-400 cursor-pointer rounded-md">How it Works</li>
            <li className="p-2 hover:bg-yellow-400 cursor-pointer rounded-md"><button>SING IN</button></li>
          </ul>
      </nav>
{/*menu pour pc */}
      <nav className="hidden lg:block text-white" >
          <ul className="flex flex-row justify-between items-center gap-x-9 text-sm">
            <li className="cursor-pointer hover:underline hover:text-yellow-400">About Us</li>
            <li className="cursor-pointer hover:underline hover:text-yellow-400">Contact Us</li>
            <li className="cursor-pointer hover:underline hover:text-yellow-400">How it Works</li>
            <li className="cursor-pointer border px-6 border-yellow-400 text-yellow-400">SING IN</li>
          </ul>
      </nav>
    </header>
  )
}