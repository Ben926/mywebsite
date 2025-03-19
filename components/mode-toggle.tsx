"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="relative overflow-hidden"
      >
        <span className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
        mass: 0.5
      }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-hidden hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ 
              rotate: 0, 
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            exit={{ 
              rotate: 180, 
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {theme === 'light' ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </motion.div>
        </AnimatePresence>
      </Button>
    </motion.div>
  )
}