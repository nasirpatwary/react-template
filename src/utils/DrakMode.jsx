import { useEffect, useState } from "react"
const DrakMode = () => {
  const [theme, setTheme] = useState(() =>{
    localStorage.getItem("theme") === "dark"
  })
  useEffect(() =>{
    const root = document.documentElement
    if (theme) {
        root.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }else{
       root.classList.remove("dark")
       localStorage.setItem("theme", "light") 
    }
  }, [theme])
  return ( 
    <button
    onClick={() => setTheme(!theme)} 
    className="border px-4 py-1 rounded border-gray-300 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-white">{theme ? "light" : "dark"}</button>
  )
}

export default DrakMode