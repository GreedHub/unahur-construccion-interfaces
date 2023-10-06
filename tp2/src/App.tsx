import CartContext from './context/cart'
import Cart from './models/cart'
import './App.scss'
import Header from './components/header'
import Footer from './components/footer'
import ProductList from './components/product-list'
import { useEffect, useState } from 'react'
import Product, { ProductWithQuantity } from './types/product'

function App() {
  const [cart] = useState<Cart>(new Cart())
  const [products,setProducts] = useState<Product[]>(cart.products)
  const [productList,setProductList] = useState<ProductWithQuantity[]>(cart.productList)
  const [totalPrice,setTotalPrice] = useState<number>(cart.totalPrice)
  const [productsCount,setPriceCount] = useState<number>(cart.productsCount)

  useEffect(()=>{
    setProducts(()=>cart.products)
    setProductList(()=>cart.productList)
    setTotalPrice(()=>cart.totalPrice)
    setPriceCount(()=>cart.productsCount)
  },[cart.totalPrice])

  const updateValues = ()=>{
    setProducts(()=>cart.products)
    setProductList(()=>cart.productList)
    setTotalPrice(()=>cart.totalPrice)
    setPriceCount(()=>cart.productsCount)
  }

  const addProduct = (product:Product)=>{
    cart.addProduct(product)
    updateValues()
  }

  const removeProduct = (productId:string)=>{
    cart.removeProduct(productId)
    updateValues()
  }

  return (
    <div className='app'>
      <CartContext.Provider value={{cart:{products,productList,totalPrice,productsCount},addProduct,removeProduct}}>
        <Header/>
        <ProductList/>
        <Footer/>
      </CartContext.Provider>
    </div>
  )
}

export default App
