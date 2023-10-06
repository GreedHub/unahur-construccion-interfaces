type Product ={
    id: string
    price: number
    name: string
    description: string
    image:string
}

export type ProductWithQuantity = Product & {
    quantity:number
}

export type ProductWithQuantityMap = Record<string,ProductWithQuantity>

export default Product