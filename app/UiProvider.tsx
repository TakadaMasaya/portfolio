'use client'

import { FC, ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

type UiProviderProps = {
  children: ReactNode
}

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
  return (
    <NextUIProvider>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
