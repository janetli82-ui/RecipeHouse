'use client'

import { userUseContext } from "@/context/userContext";
import Logout from "../Logout";
import { UserContextType } from "@/types/types";



const Header = () => {
  const {user} = userUseContext() as UserContextType

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-linear-to-r from-amber-500 to-orange-600 w-full px-8 py-4 shadow-lg gap-3">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center shadow-md">
          <img
            src="/recipe.jpg"
            alt="logo"
            className="h-10 w-10 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-wider">
            MYRECIPEHOUSE
          </h1>
          <p className="text-xs text-amber-100 tracking-widest">
            🍳 Discover Flavor · Share Joy
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {user ? <p className="text-white">Hi, {user.username}</p> : <p className="text-white">Please log in</p>}
        <Logout /> 
      </div>
    </div>
  );
};

export default Header;
