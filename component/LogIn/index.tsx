'use client'

import { SetStateAction, useState } from "react";
import { users } from "@/data/user";
import { userUseContext } from "@/context/userContext";
import { UserContextType } from "@/types/types";

const LogIn = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {setUser} = userUseContext() as UserContextType

  const handleUsername = (e: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(e.target.value)
  }

  const handleLogIn = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const loggedUser = users.find( item => item.username === username && item.password === password)
    if(loggedUser) setUser(loggedUser)
    else alert('Please write correct username or password');
  }

  const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
    if(e.key === "Enter"){
      e.preventDefault()
      const loggedUser = users.find( item => item.username === username && item.password === password)
      if(loggedUser) setUser(loggedUser)
    }
  }

  const handlePassword = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value)
  }
  return (
    <form className="max-w-sm mx-auto flex flex-col gap-6 font-sans">
      <div className="group relative">
        <label
          htmlFor="name"
          className="block mb-1 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
        >
          Identity
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-zinc-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="name"
            className="block w-full pl-10 p-3.5 bg-white text-zinc-900 font-medium text-sm border-2 border-zinc-900 focus:outline-none focus:ring-0 focus:border-blue-600 dark:bg-zinc-900 dark:text-white dark:border-zinc-100 dark:focus:border-yellow-400 transition-colors duration-200 ease-in-out"
            placeholder="Enter your username"
            onChange={handleUsername}
            value={username}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-200 -z-10 translate-x-1.5 translate-y-1.5 border-2 border-transparent dark:bg-zinc-700 transition-transform group-focus-within:translate-x-2.5 group-focus-within:translate-y-2.5" />
        </div>
      </div>
      <div className="group relative">
        <label
          htmlFor="password"
          className="block mb-1 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
        >
          Access Key
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-zinc-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <input
            type="password"
            id="password"
            className="block w-full pl-10 p-3.5 bg-white text-zinc-900 font-medium text-sm border-2 border-zinc-900 focus:outline-none focus:ring-0 focus:border-blue-600 dark:bg-zinc-900 dark:text-white dark:border-zinc-100 dark:focus:border-yellow-400 transition-colors duration-200 ease-in-out"
            placeholder="Enter your password"
            onChange={handlePassword}
            value={password}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-200 -z-10 translate-x-1.5 translate-y-1.5 border-2 border-transparent dark:bg-zinc-700 transition-transform group-focus-within:translate-x-2.5 group-focus-within:translate-y-2.5" />
        </div>
      </div>
      <button type="submit" className="relative inline-block w-full group mt-2" onClick={handleLogIn} onKeyDown={handleKeyDown}>
        <span className="absolute top-0 left-0 w-full h-full transition-all duration-200 ease-out transform translate-x-1.5 translate-y-1.5 bg-blue-600 dark:bg-yellow-400 border-2 border-zinc-900 dark:border-white group-hover:translate-x-0 group-hover:translate-y-0" />
        <span className="relative block w-full px-5 py-3.5 text-sm font-bold tracking-widest uppercase border-2 border-zinc-900 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white dark:border-white">
          Log In
        </span>
      </button>
    </form>
  );
};

export default LogIn;
