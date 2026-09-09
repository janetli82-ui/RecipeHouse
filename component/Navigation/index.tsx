'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const menuItem = ["Home", "Categories", "Profile"]
  const currentPath = usePathname();
  return(
    <nav className="flex justify-evenly py-5">
      {menuItem.map((item, index) => {
        const href = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`
        const isActive = currentPath === href
        return(
          <div className="flex justify-evenly py-5 mt-2" key={index}>
            <Link href={href} className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${isActive ? "active" : "normal"}`}>{item}</Link>
          </div>
        )
      })}
    </nav>
  )
} 

export default Navigation