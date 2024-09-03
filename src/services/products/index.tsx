export const getData= async(url: string)=> {
    const res = await fetch(url, {
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
        throw new Error("Error fetching")
    }

    return res.json()
}