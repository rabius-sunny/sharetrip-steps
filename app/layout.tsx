import type { Metadata } from 'next'
import { Murecho, Inter } from 'next/font/google'
import './globals.css'
import Appbar from '@/components/Appbar'

const murecho = Murecho({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sharetrip Bookings',
  description: 'Sharetrip bookings details'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${murecho.className} bg-[#EBF0F5]`}>
        <Appbar />
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-4 my-4 gap-6'>
            <div className='col-span-1 h-full bg-white rounded-lg shadow-lg'></div>
            <div className='col-span-3'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
