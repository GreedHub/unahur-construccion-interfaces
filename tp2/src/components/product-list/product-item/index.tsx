import { ReactElement, useContext, useState } from 'react';
import './styles.scss'
import Product from '../../../types/product';
import CartContext from '../../../context/cart'

type ProductListItemProps = {
    product: Product
}

export default function ProductListItem(props:ProductListItemProps):ReactElement{
    const { image, name, price, description } = props.product
    const { addProduct } = useContext(CartContext)

    const BUY_MSG = 'Agregar al carrito'
    const PURCHASED_MSG = 'Agregado al carrito!'

    const [ buyBtn, setBuyBtn ] = useState<string>(BUY_MSG)

    const onPurchase = ()=>{
        addProduct(props.product)

        setBuyBtn(()=>PURCHASED_MSG)

        setTimeout(() => {
            setBuyBtn(()=>BUY_MSG)
        }, 1000);
    }

    return (
        <li className='product-list__item'>
            <img src={`/books/${image}`} alt=""  />
            <div className='product-list__item-name'>
                {name}
            </div>

            <div className='product-list__item-price'>
                $ {price}
            </div>
            <div className='product-list__item-description'>
                {description}
            </div>
            <button onClick={onPurchase}>{buyBtn}</button>
        </li>
    )
}