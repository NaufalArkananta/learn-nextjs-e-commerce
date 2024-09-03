import Image from "next/image"
import img from "./img.png"
import Link from "next/link"

export default function HeroSection() {
    return (
        <div className="bg-blue-200 px-36 pt-40">
            <div className="flex justify-between">
                <div>
                    <div>
                        <h1 className="font-bold text-7xl text-blue-600">Sale 20% Off</h1>
                        <h1 className="font-bold text-6xl text-blue-500">On Everyting</h1>
                    </div>
                    <p className="text-[15px] py-[25px] font-medium">Nikmati diskon spesial 20% untuk semua produk di toko kami! <br /> Ayo, segera berbelanja dan hemat lebih banyak sekarang!</p>
                    <div>
                        <Link href={"/"}>
                            <button className="bg-blue-500 text-white h-12 w-40 font-bold text-lg rounded-xl hover:bg-blue-600 transition-all duration-200" >Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image
                        className="h-[400px] w-auto"
                        src={img}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    )
}