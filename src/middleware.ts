import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
    const isLogin = false

    if(!isLogin) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

//     if (req.nextUrl.pathname.startsWith("/about")){
//         // return NextResponse.rewrite(new URL("/", req.url));  //rewrite: jika kita ke about page, page tersebut akan seperti home page
//         // return NextResponse.redirect(new URL("/", req.url));  //redirect: jika kita masuk page about akan diarahkn ke home page
//     }
}

export const config = {
    // matcher: "/dashboard/:path*" //semua yang ada di dashboard
    // matcher: "/dashboard/product" //hanya halaman product
    matcher: ["/dashboard/product","/about"] //hanya halaman product
}