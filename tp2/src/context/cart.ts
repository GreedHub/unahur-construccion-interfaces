import { createContext } from "react";
import Cart, { ICart } from "../models/cart";
import Product from "../types/product";

type ICartContext = {
    cart: ICart,
    addProduct:(product:Product)=>void 
    removeProduct:(productId:string)=>void
}

const defaultCartContext = {
    cart: new Cart(),
    addProduct:function(product:Product){
        this.cart.addProduct(product)
    },
    removeProduct:function(productId:string){
        this.cart.removeProduct(productId)
    }
}

export default createContext<ICartContext>(defaultCartContext)