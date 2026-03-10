import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'News Website',
  description: 'News Website',
  generator: 'react',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
