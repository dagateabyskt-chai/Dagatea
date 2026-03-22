"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme((prev) => {
        return prev === "dark" ? "light" : "dark"
    })
  }

  return (
        <button onClick={changeTheme} className="flex justify-start items-center dark:justify-end w-11 h-6 bg-black dark:bg-white border border-zinc-500 rounded-full overflow-hidden">
            <Sun className="text-black bg-white rounded-full p-0.5 h-[1.4rem] w-[1.4rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute text-white bg-black rounded-full p-0.5 h-[1.4rem] w-[1.4rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </button>
  )
}

export default ThemeToggle