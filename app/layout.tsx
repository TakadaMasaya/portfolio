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
          <div className="grid h-full grid-rows-[auto_1fr_auto] sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-[1fr]">
            <div></div>
            <div className="max-w-screen-sm border-x-1 border-x-gray-700 px-4">
              <Header />
              <main className="grid place-items-center bg-background text-foreground dark">
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
