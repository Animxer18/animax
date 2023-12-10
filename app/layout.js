import React, { lazy, Suspense } from "react";
import { Nabla, Roboto } from 'next/font/google'
import './globals.css'

// Components
import Loading from "@/Components/Loading";
const NavigationBar = lazy(() => import(/* webpackChunkName: "lazyComponent" */ "@/Components/Navigation"));

const roboto = Roboto({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata = {
  title: 'AniMax',
  description: 'Maximum Anime Experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className='main-container'>
          <Suspense fallback={<Loading />}>
            <NavigationBar />
          </Suspense>
          {children}
        </div>
      </body>
    </html>
  )
}
