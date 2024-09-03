import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const request = await req.json()
    console.log(request)
    return NextResponse.json(
        {
            status: 200,
            message: 'Success',
            data: request
        }
    )
}