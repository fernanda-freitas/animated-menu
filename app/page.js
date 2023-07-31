'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isOpened, setIsOpened] = useState(false)
  
  const handleClick = () => {
    setIsOpened(!isOpened)
  }

  const items = ["Homepage", "About", "Works", "Contact"]

  const backgroundAnimation = {
    initial: {
      height: 0
    },
    enter: {
      height: "100vh",
      transition: {
        duration: 0.2, 
        ease: [0.76, 0, 0.24, 1],
      }
    },
    exit: {
      height: 0,
      transition: {
        duration: 1, 
        ease: [0.76, 0, 0.24, 1],
      }
    },
  }

  const itemAnimation = {
    initial:{  
      y: 100,
      opacity: 0, 
    },
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1, 
        ease: [0.76, 0, 0.24, 1], 
        delay: i * 0.03,
      }
    }),
    exit: (i) => ({
      y: 100,
      opacity: 0,
      transition: {
        duration: .3, 
        ease: [0.76, 0, 0.24, 1], 
        delay: i * 0.03,
      }
    })
  }

  return (
    <main>
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <div className="flex min-h-screen p-12">
            <motion.div key="hamburger" onClick={handleClick} className="flex flex-col ml-auto gap-y-1.5 hover:cursor-pointer p-2">
              <motion.span 
                initial={{transform: "rotate(45deg)", origin: "center"}} 
                animate={{transform: "rotate(0deg)"}} 
                className="w-7 h-0.5 bg-black">
              </motion.span>
              <motion.span 
                initial={{transform: "rotate(-45deg)", origin: "center"}} 
                animate={{transform: "rotate(0deg)"}} 
                className="w-7 h-0.5 bg-black">
              </motion.span>
            </motion.div>   
          </div>
        ) : (
          <motion.div 
            key="backgroundAnimation" 
            variants={backgroundAnimation} 
            initial="initial" 
            animate="enter" 
            exit="exit" 
            className="bg-black">
            <div className="flex flex-col p-12 h-full">
              <div onClick={handleClick} className="flex flex-col ml-auto gap-y-1.5 hover:cursor-pointer p-2">
                <motion.span 
                  initial={{transform: "rotate(0deg)"}} 
                  animate={{transform: "rotate(45deg) translateY(5px)"}} 
                  className="w-7 h-0.5 bg-white">
                </motion.span>
                <motion.span 
                  initial={{transform: "rotate(0deg)"}} 
                  animate={{transform: "rotate(-45deg) translateY(-5px)"}} 
                  className="w-7 h-0.5 bg-white">
                </motion.span>
              </div>
              <ul className="m-auto text-center">
                <li className="flex flex-col text-6xl leading-relaxed font-extralight text-white hover:cursor-pointer overflow-hidden">
                  {items.map((item, i) => (
                    <motion.span
                      custom={i} 
                      variants={itemAnimation} 
                      initial="initial" 
                      animate="enter" 
                      exit="exit"
                      key={i} >
                      {item}
                    </motion.span>
                  ))}
                </li>
              </ul>   
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
