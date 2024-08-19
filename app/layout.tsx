import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import ContentTabs from './contentTabs'
import Footer from './footer'
import './globals.css'
import Header from './header'
import { UiProvider } from './UiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Takada Masaya',
  description: 'これはたかだまさやのポートフォリオサイトです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <UiProvider>
          <div className="grid min-h-dvh sm:grid-cols-[1fr_auto_1fr]">
            <div></div>
            <div className="max-w-screen-sm border-x-1 border-x-gray-700 sm:w-unit-9xl">
              <Header />
              <main className="grid place-items-center bg-background pb-48 text-foreground dark">
                <ContentTabs />
                {children}
              </main>
              <Footer />
            </div>
            <div></div>
          </div>
        </UiProvider>
      </body>
    </html>
  )
}
