'use client'

import { FC, ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'

type UiProviderProps = {
  children: ReactNode
}

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}