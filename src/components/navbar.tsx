"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathName = usePathname();
    return (
        <nav className="flex justify-between items-center p-6 bg-blue-500e bg-black">
            <div className="flex items-center text-white">
                <Link href="/" className="text-xl font-bold">
                    Bakol Ghoib
                </Link>
            </div>
            <div className="flex">
                <Link href="/about" className={`ml-4 text-sm font-medium ${pathName === "/about" ? "text-blue-100" : "text-white" }`}>
                    About
                </Link>
                <Link href="/products" className={`ml-4 text-sm font-medium ${pathName === "/products" ? "text-blue-100" : "text-white"}`}>
                    Products
                </Link>
                <Link href="/cart" className={`ml-4 text-sm font-medium ${pathName === "/cart" ? "text-blue-100" : "text-white"}`}>
                    Cart
                </Link>
                <Link href="/login" className={`ml-4 text-sm font-medium ${pathName === "/login" ? "text-blue-100" : "text-white"}`}>
                    Log In</Link>
            </div>
        </nav>
    )
}