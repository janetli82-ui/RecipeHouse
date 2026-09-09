'use client'

import { userUseContext } from "@/context/userContext";
import { UserContextType } from "@/types/types";

const Logout = () => {

  const {setUser} = userUseContext() as UserContextType

  const handleClick = () => {
    setUser(null)
  }
  return (
    <button className="group flex items-center justify-start md:w-11 w-32 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1" onClick={handleClick}>
      <div className="flex items-center justify-start px-3 w-full transition-all duration-300 md:group-hover:justify-start">
        <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
        </svg>
      </div>
      <div className="absolute right-5 transform transform-x-0 md:translate-x-full opacity-100 md:opacity-0 text-white text-lg font-semibold transition-all duration-300 md:group-hover:translate-x-0 md:group-hover:opacity-100">
        Logout
      </div>
    </button>
  );
}

export default Logout;
