

import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest, res: NextResponse) {
    const tags = req.nextUrl.searchParams.get('tags')
    const secret = req.nextUrl.searchParams.get('secret')

    if(secret !==process.env.REVALIDATE_TOKEN){
        return (
            NextResponse.json({
                status:401,
                message: 'Invalid secret '
            },{
                status:401
            })
        )
    }

    if(!tags) {
        return (
            NextResponse.json({
                status:400,
                message: 'Tag is required'
            },{
                status:400
            })
        )
    }

    revalidateTag(tags)

    return(
        NextResponse.json({
        status: 200,
        message: 'Tag revalidated successfully',
        revalidate: true,
        now: Date.now()
    })
    )
}