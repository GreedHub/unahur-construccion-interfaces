import { ReactElement, useContext } from 'react';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import CartItemList from './item-list';

import CartContext from '../../context/cart'

import './styles.scss'

export default function Cart():ReactElement{
    const { totalPrice, productsCount } = useContext(CartContext).cart


    return (
        <div className='shopping-cart'>
            <ShoppingCartIcon/>
            <div className="shopping-cart__count">
                {productsCount}
            </div>
            <div className="shopping-cart__content">
                <CartItemList/>
                <br /><hr /><br />
                Total ({productsCount}): $ {totalPrice}
            </div>
        </div>
    )
}