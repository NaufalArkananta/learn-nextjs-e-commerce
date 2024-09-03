import { retrieveData, retrieveDataById } from "@/lib/firebase/servises";
import { NextRequest, NextResponse } from "next/server";

// const data = [
//     {
//     id: 1,
//     title: 'Sepatu 1',
//     price: 100,
//     description: 'This is product 1',
//     img: `https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/daad25ea-6b35-4809-b789-fccaa588588a/giannis-freak-6-ep-basketball-shoes-Wqj5B6.png`,
//     terjual: `200`
//     },
//     {
//         id: 2,
//         title: 'Product 2',
//         price: 200,
//         description: 'This is product 2',
//         img:`https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/f9adcbc4-2bd2-4756-a6fe-db4e2be7f671/giannis-freak-6-ep-basketball-shoes-ThjqbM.png`,
//         terjual: `100`
//     },
//     {
//         id: 3,
//         title: 'Product 3',
//         price: 200,
//         description: 'This is product 2',
//         img:`https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/f9adcbc4-2bd2-4756-a6fe-db4e2be7f671/giannis-freak-6-ep-basketball-shoes-ThjqbM.png`,
//         terjual: `3`
//     },
//     {
//         id: 4,
//         title: 'Product 4',
//         price: 200,
//         description: 'This is product 2',
//         img:`https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/f9adcbc4-2bd2-4756-a6fe-db4e2be7f671/giannis-freak-6-ep-basketball-shoes-ThjqbM.png`,
//         terjual: `4`
//     },
//     {
//         id: 5,
//         title: 'Product 5',
//         price: 200,
//         description: 'This is product 2',
//         img:`https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/f9adcbc4-2bd2-4756-a6fe-db4e2be7f671/giannis-freak-6-ep-basketball-shoes-ThjqbM.png`,
//         terjual: `00`
//     },
//     {
//         id: 6,
//         title: 'Sepatu 6',
//         price: 200,
//         description: 'This is product 2',
//         img:`https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/f9adcbc4-2bd2-4756-a6fe-db4e2be7f671/giannis-freak-6-ep-basketball-shoes-ThjqbM.png`,
//         terjual: `10`
//     },
//     {
//         id: 7,
//         title: 'Sepatu 7',
//         price: 200,
//         description: 'This is product 2',
//         img:`https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/f9adcbc4-2bd2-4756-a6fe-db4e2be7f671/giannis-freak-6-ep-basketball-shoes-ThjqbM.png`,
//         terjual: `10`
//     },
// ]

export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id');

    if(id) {
        const detailProduct = await retrieveDataById('products',id)
        if(detailProduct) {
            return NextResponse.json(
                {
                    status: 200,
                    message: 'Success',
                    data: detailProduct
                })
        }
        return NextResponse.json(
            {
                status: 404,
                message: 'Not found',
                data: {}
            })
    }

    const products = await retrieveData('products')

    return NextResponse.json(
        {
            status: 200,
            message: 'Success',
            data: products
        })
    

}