import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/navigation/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Rendering Test V2',
    default: 'Rendering Test V2', // default title
  },
  description: "Rendering test with app router"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-full'>
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative isolate px-6 pt-14 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
