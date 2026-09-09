'use client'

import { UserContextType, UserType } from "@/types/types";
import { createContext, useContext, useState, ReactNode } from "react";

export const UserContext = createContext<UserContextType | null>(null)//建立通道,可以用它共享数据。

export const UserProvider = ({children}:{children:ReactNode}) => { //管理数据，并把数据放进这个通道的“组件”
  const [user, setUser] = useState<UserType | null>(null)

  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const userUseContext = () => {
  return useContext(UserContext)
}