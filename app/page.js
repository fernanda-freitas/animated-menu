'use client'

import { useState } from "react"

export default function Home() {
  const [isOpened, setIsOpened] = useState(false)
  
  const handleClick = () => {
    setIsOpened(!isOpened)
  }
  
  return (
    <main>
      {!isOpened ? (
        <div className="flex min-h-screen p-12">
          <div onClick={handleClick} className="flex flex-col ml-auto gap-y-1.5 hover:cursor-pointer">
            <span className="w-7 h-0.5 bg-black"></span>
            <span className="w-7 h-0.5 bg-black"></span>
            <span className="w-7 h-0.5 bg-black"></span>
          </div>   
        </div>
      ) : (
        <div className="flex flex-col min-h-screen p-12 bg-black">
          <div onClick={handleClick} className="flex flex-col ml-auto gap-y-1.5 hover:cursor-pointer">
            <span className="w-7 h-0.5 bg-white origin-center rotate-45 translate-y-1"></span>
            <span className="w-7 h-0.5 bg-white origin-center -rotate-45 -translate-y-1"></span>
          </div>
          <ul className="m-auto text-center">
            <li className="text-6xl leading-relaxed font-extralight text-white hover:cursor-pointer">Homepage</li>
            <li className="text-6xl leading-relaxed font-extralight text-white hover:cursor-pointer">About</li>
            <li className="text-6xl leading-relaxed font-extralight text-white hover:cursor-pointer">Works</li>
            <li className="text-6xl leading-relaxed font-extralight text-white hover:cursor-pointer">Contact</li>
          </ul>   
        </div>
      )}
    </main>
  )
}
