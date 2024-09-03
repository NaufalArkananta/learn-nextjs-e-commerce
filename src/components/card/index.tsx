import Image from "next/image"
import dog from "/public/kirek.jpg"
import Link from "next/link"


export default function ProductCard() {
    return(
        <div className="grid grid-rows-1 grid-cols-4 pb-20">
            <div className="rounded-lg max-w-[200px] bg-slate-50 border border-slate-200 shadow-md">
                <Link href="/detailproduct">
                    <div>
                        <Image
                            className="w-[200px] h-[200px] rounded-t-lg"
                            src={dog}
                            width={300}
                            height={300}
                            alt="Picture of the author"
                            />
                    </div>
                    <div className="p-3">
                        <h5 className="font-medium text-lg my-3 uppercase">Ini Kirek</h5>
                        <div className="flex justify-between">
                            <p className="text-sm ">Rp.2000</p>
                            <p className="text-sm ">Terjual 100</p>
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
    )
}