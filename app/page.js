'use client'

import { useState } from "react"
import { motion, AnimatePresence, delay } from "framer-motion"

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
        duration: 1.2, 
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
        duration: 1.3, 
        ease: [0.76, 0, 0.24, 1], 
        delay: i * 0.03,
      }
    }),
    exit: (i) => ({
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1], 
        delay: i * 0.05,
      }
    })
  }

  const details = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {delay: 0.9, duration: 0.6},
    },
    exit: {
      y: 20,
      opacity: 0,
    }
  }

  return (
    <main>
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <div className="flex min-h-screen p-8">
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
            <div className="relative flex flex-col p-8 h-full">
              <div onClick={handleClick} className="relative flex flex-col ml-auto gap-y-1.5 hover:cursor-pointer p-2 z-10">
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
              <ul className="relative z-0">
                  {items.map((item, i) => (
                    <li key={`l_${i}`} className="hover:cursor-pointer overflow-hidden pb-4">
                      <motion.span
                        custom={i} 
                        variants={itemAnimation} 
                        initial="initial" 
                        animate="enter" 
                        exit="exit"
                        key={i} 
                        className="flex flex-col uppercase text-6xl leading-relaxed font-extralight text-neutral-300">
                        {item}
                      </motion.span>
                    </li>
                  ))}
              </ul> 
              <div key="details" className="flex flex-row justify-between mt-auto">
                <motion.span 
                  variants={details} 
                  initial="initial" 
                  animate="enter" 
                  exit="exit" 
                  className="uppercase text-sm text-neutral-600 overflow-hidden">
                    Made by: <span className="text-neutral-400">Fernanda Freitas</span>
                </motion.span>
                <motion.span 
                  variants={details} 
                  initial="initial" 
                  animate="enter" 
                  exit="exit" 
                  className="uppercase text-sm text-neutral-600 overflow-hidden">
                    Typography: <span className="text-neutral-400">Google Fonts</span>
                </motion.span>
                <motion.span 
                  variants={details} 
                  initial="initial" 
                  animate="enter" 
                  exit="exit" 
                  className="uppercase text-sm text-neutral-400 overflow-hidden hover:cursor-pointer">
                    Privacy Policy | Terms and conditions
                </motion.span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
