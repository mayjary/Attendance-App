"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users } from "lucide-react"

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="container mx-auto flex justify-around py-2">
        <Link href="/" className={`flex flex-col items-center ${pathname === "/" ? "text-blue-500" : "text-gray-500"}`}>
          <Home />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/late-comers"
          className={`flex flex-col items-center ${pathname === "/late-comers" ? "text-blue-500" : "text-gray-500"}`}
        >
          <Users />
          <span className="text-xs">Late Comers</span>
        </Link>
      </div>
    </nav>
  )
}

