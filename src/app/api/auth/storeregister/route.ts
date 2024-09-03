import { addStore } from "@/lib/firebase/servises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const request = await req.json()
    const response = await addStore(request)
    return NextResponse.json({status: response.status, message: response.message}, {status: response.statusCode})
}