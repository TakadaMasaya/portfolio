'use client'

import { Switch } from "@nextui-org/react"
import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex justify-end mb-3">
      <Switch
        startContent={<FiMoon />}
        endContent={<FiSun />}
        onValueChange={(isSelected) => setTheme(isSelected ? 'light' : 'dark')}
      />
    </div>
  )
}
