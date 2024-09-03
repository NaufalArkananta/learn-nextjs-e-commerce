import ProductCard from "../card"

export default function FlashSale( ) {
    return(
        <div className="mx-36 mt-5">
            {/* head n time */}
            <div className="flex items-center ">
                <h1 className="mr-10 font-bold text-[36px] ">FlashSale</h1>
                <h1 className="mr-10 font-semibold text-[24px]">IKI TIMER COK</h1>
            </div>
            <div>
                <ProductCard></ProductCard>
            </div>
        </div>
    )
}