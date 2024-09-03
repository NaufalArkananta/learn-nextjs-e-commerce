import Image from "next/image"
import dog from "/public/kirek.jpg"

export default function DetailProductPage() {
    return (
        <div className="flex justify-center  mx-36 mt-5 gap-32 ">
            <div>
                <Image
                    className="h-[350px] w-[350px] rounded-lg"
                    src={dog}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
                <div className="flex gap-5 overflow-x-auto mt-5">
                    <Image
                        className="h-[85px] w-[85px] mt-5 rounded-lg"
                        src={dog}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                    <Image
                        className="h-[85px] w-[85px] mt-5 rounded-lg"
                        src={dog}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                    <Image
                        className="h-[85px] w-[85px] mt-5 rounded-lg"
                        src={dog}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                    <Image
                        className="h-[85px] w-[85px] mt-5 rounded-lg"
                        src={dog}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className="pl-5">
                <h1 className="text-3xl font-bold">Kirek Kucing</h1>
                <div className="flex items-center">
                    <p className="text-sm">Terjual <span className="text-gray-400">(100)</span></p>
                    <div className="flex justify-center px-5">
                        <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                        </svg>
                        <p>4.5<span className="text-gray-400">(100 Rating)</span></p>
                    </div>
                    <p>Komentar<span className="text-gray-400">(100)</span></p>
                </div>
                <div className="pt-5">
                    <h1 className="text-3xl font-bold">Rp.3.000.000.00</h1>
                </div>
                <div className="pt-10">
                    <h4 className="text-lg font-semibold">Pilih Warna: <span className="font-normal text-gray-400">Putih</span></h4>
                </div>
                <div className="flex grid-cols-4 gap-5 py-3">
                    <button className=" px-3 py-2 rounded-lg border border-gray-200 text-gray-400 hover:border-blue-300 hover:text-blue-700">Hitam</button>
                    <button className=" px-3 py-2 rounded-lg border border-gray-200 text-gray-400 hover:border-blue-300 hover:text-blue-700">Putih</button>
                    <button className=" px-3 py-2 rounded-lg border border-gray-200 text-gray-400 hover:border-blue-300 hover:text-blue-700">Biru</button>
                </div>
                <div>
                <hr />
                    <h1 className="text-lg font-semibold py-5">Detail:</h1>
                    <div>
                        <p className="text-gray-500 text-lg">
                            Kondisi: <span className="text-black">Baru</span>
                        </p>
                        <p className="text-gray-500 text-lg">
                            Min. Pemesanan: <span className="text-black">1</span>
                        </p>
                        <p className="text-gray-500 text-lg">
                            Categori: <span className="text-black">Hewan</span>
                        </p>
                        <p>
                        </p>
                    </div>
                </div>
                <hr />
                <div className="flex pt-5">
                    <Image
                        className="h-[60px] w-[60px] rounded-lg"
                        src={dog}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    /> 
                    <div className="pl-3 pr-10">
                        <h1 className="font-semibold">Nama Toko</h1>
                        <p>Deskripsi Toko</p>
                    </div>
                    <button className="px-3 py-2 border border-blue-500 rounded-lg text-blue-500 font-medium">Follow</button>
                </div>
            </div>
            <div className=" border border-black px-12 rounded-xl mb-10">
                <div className="pt-5">
                    <h1 className="font-bold text-lg">Atur jumlah dan catatan</h1>
                    <div className="flex items-center gap-5 py-5">
                    <Image
                            className="h-[50px] w-[50px] rounded-lg"
                            src={dog}
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        /> 
                        <p>Putih</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 pb-10">
                    <div className="flex justify-center gap-3 border border-black rounded-lg mr-2 py-1">
                        <button>
                            <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                            </svg>
                        </button>
                        <p>1</p>
                        <button>
                            <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
                            </svg>
                        </button>
                    </div>
                    <div className="">
                        <h2 className="text-base">Stock: <span className="font-bold">10 rb</span></h2>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h3 className="text-lg text-gray-400">Subtotal</h3>
                    <h2 className="text-xl font-bold">3.000.000</h2>
                </div>
                <div className="py-3">
                    <div className="flex justify-center">
                        <button className="flex px-10 py-2 border bg-blue-500 rounded-lg hover:bg-blue-600">
                            <svg className="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                            </svg>
                            <h1 className="text-white pl-3">Keranjang</h1>
                        </button>
                    </div>
                    <div className="flex justify-center pt-3">
                        <button className="flex px-[80px] py-2 border bg-blue-500 rounded-lg hover:bg-blue-600">
                            <h1 className="text-white">Beli</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}