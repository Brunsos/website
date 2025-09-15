import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Zorian's Hub",
  description: 'Computer Science Graduate & Software Developer',
  icons: {
    icon: '/cat.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}