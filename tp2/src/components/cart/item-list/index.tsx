import { ReactElement, useContext } from 'react';
import CartContext from '../../../context/cart'
import './styles.scss'
import CartItem from './cart-item';

export default function CartItemList():ReactElement{
    
    const { productList, productsCount } = useContext(CartContext).cart

    const NO_ITEMS_MSG = `Aún no hay items en el carrito`
    
    return (
        <ul className='cart-items'>
            {productsCount ? productList.map((item,id) => <CartItem item={item} key={id}/>):NO_ITEMS_MSG}
        </ul>
    )
}