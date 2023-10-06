import Product, { ProductWithQuantity, ProductWithQuantityMap } from "../types/product"

export interface ICart{
    products: Product[] 
    productList: ProductWithQuantity[]
    productsCount:number
    totalPrice:number
}

export default class Cart implements ICart{
    products: Product[] 
    productList: ProductWithQuantity[] = []
    productsCount = 0
    totalPrice = 0

    constructor(){
        this.products = []
    }

    private updateValues(){
        this.productsCount = this.products.length
        this.totalPrice = this.products.reduce<number>((acc,product) => acc + product.price ,0)
        this.calculateProductList()
    }

    addProduct (product:Product) {
        this.products.push({...product})
        this.updateValues()
    }

    removeProduct (productId:string) {
        const {prods} = this.products.reduce<{found:boolean,prods:Product[]}>((acc, prod) => {
            if(!acc.found && prod.id === productId){
                acc.found = true
                return acc
            }

            acc.prods.push(prod)
            return acc
        },{found:false,prods:[]})

        this.products = prods
        this.updateValues()
    }

    private calculateProductList (){
        const productsMap = this.products.reduce<ProductWithQuantityMap>((productsMap,product)=>{
            if(!productsMap[product.id])
                productsMap[product.id] = {...product,quantity:0}
            
            productsMap[product.id].quantity++

            return productsMap
        },{})

        this.productList = Object.keys(productsMap).reduce<ProductWithQuantity[]>((groupedProductList,id)=>{
            groupedProductList.push(productsMap[id])
            return groupedProductList
        },[])
    }
}