'use client'

import { userUseContext } from "@/context/userContext"

import Navigation from "../Navigation"
import { UserContextType } from "@/types/types"
import LogIn from "."
import { ReactNode } from "react"
import Public from "./public"

const Wrapper = ({children}:{children:ReactNode}) => {
  const { user } = userUseContext() as UserContextType
  return(
    <div className="grow">
      {user ? 
        <>
          <Navigation />
          <div className="px-4 text-center -mt-4">
            {children}
          </div>
        </>
        : <div className="p-20">
            <LogIn />
            <Public />
          </div>
      }
     
    </div>
  )
}

export default Wrapper