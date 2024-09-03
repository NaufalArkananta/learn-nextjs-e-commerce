"use client"

import { useState } from "react"

export default function AdminProductPage() {
    const [status,setStatus] = useState("")
    const revalidate=async () => {
        const res = await fetch("http://localhost:3000/api/revalidation?tags=product&secret=1234",
            //secret for sequrity
            {
                method: "POST"
            }
        )
        if(!res.ok) {
            setStatus("Failed to revalidate")
        }
        const response = await res.json()
        if(response.revalidate) {
            setStatus("Revalidations Success")
        }
    }

    return(
        <div className="w-full h-96 bg-gray-300 rounded-xl flex justify-center items-center mx-5">
            <h1>{status}</h1>
            <button className="bg-blue-600 rounded-xl p-10" onClick={revalidate}>Refresh</button>
        </div>
    )
}