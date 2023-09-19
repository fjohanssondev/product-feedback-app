import type { Metadata } from 'next'
import TRPCProvider from './_trpc/TRPCProvider'
import { getServerSession } from 'next-auth'
import SessionProvider from '@components/SessionProvider'
import { Jost } from 'next/font/google'

import '@/scss/main.scss'
import { authOptions } from './api/auth/[...nextauth]/route'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={jost.className}>
        <SessionProvider session={session}>
          <TRPCProvider>
            <div className='page-wrapper'>
              {children}
            </div>
          </TRPCProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
