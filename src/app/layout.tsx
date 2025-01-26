import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import BottomNavigation from "@/components/BottomNavigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Attendance System",
  description: "A simple attendance system with barcode scanning",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="pb-16">{children}</main>
        <BottomNavigation />
        <Toaster />
      </body>
    </html>
  )
}

