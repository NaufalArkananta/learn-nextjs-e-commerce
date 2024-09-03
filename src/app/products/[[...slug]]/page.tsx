import Link from "next/link"
import Image from "next/image"

type DetailProductPageProps = {params: { slug: string[]}}

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products', {
        cache: "no-store",
    })
    // const res = await fetch('http://localhost:3000/api/product', {
    //     cache: "force-cache",
    //     next: {
    //         tags:["product"]
    //         // revalidate: 10
    //     }
    // })
    // const res = await fetch('https://fakestoreapi.com/products')

    if(!res.ok) {
        throw new Error(`Error fetching`)
    }

    return res.json()
}

export default async function ProductPage(props: DetailProductPageProps) {
    const { params } = props 
    const products = await getData()
    console.log(products)
    return (
        <div className="grid grid-cols-5 mt-10">
            {products.length > 0 && products.map((product: any) =>(
                        <div key={product.id} className="">
                        <div className="rounded-lg max-w-[200px] bg-slate-50 border border-slate-200 shadow-md my-5">
                            <Link href="/detailproduct">
                                <div>
                                    <img
                                        className="object-cover w-[200px] h-[200px] rounded-t-lg"
                                        src={product.image}
                                        width={300}
                                        height={300}
                                        alt="Picture of the author"
                                        />
                                </div>
                                <div className="p-3">
                                    <h5 className="font-medium text-lg my-3 uppercase truncate">{product.title}</h5>
                                    <div className="flex justify-between">
                                        <p className="text-sm ">Rp.{product.price}</p>
                                        <p className="text-sm ">Terjual {product.terjual}</p>
                                    </div>
                                    <div className="flex pt-2">
                                        <svg className="w-4 h-4 text-gray-800 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                                        </svg>
                                        <p className="text-sm">Malang</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
            ))}
            {params.slug && (
                <>
                <p>Category : {params.slug[0]}</p>
                <p>Gender : {params.slug[1]}</p>
                <p>Id : {params.slug[2]}</p>
                </>
            )}
        </div>
    )   
}