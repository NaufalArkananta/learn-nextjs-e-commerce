"use client"

import Link from "next/link"
import { usePathname,useRouter } from "next/navigation"

export default function Navbar() {
    const pathName = usePathname();
    const router = useRouter();
    return (
        <nav className="flex justify-between items-center py-5 bg-blue-500">
            <div className="flex items-center text-white">
                <Link href="/" className="text-4xl font-bold px-36">
                    Bakol Ghoib
                </Link>
            </div>
            <div className="flex px-36 items-center ">
                <Link href="/cart" className={`ml-4 text-sm font-medium ${pathName === "/cart" ? "text-blue-100" : "text-white"}`}>
                    <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                    </svg>
                </Link>
                {/* <Link href="/login" className={`ml-4 text-sm font-medium ${pathName === "/login" ? "text-blue-100" : "text-white"}`}>
                    Log In</Link> */}
                <Link href={"/login"}>
                    <button className=" bg-transparent px-6 py-2 rounded-xl text-white font-medium hover:bg-blue-400 text-[18px]" >Log In</button>
                </Link>
            </div>
        </nav>
    )
}