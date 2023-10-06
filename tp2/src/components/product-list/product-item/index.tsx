import { ReactElement, useContext } from 'react';
import './styles.scss'
import Product from '../../../types/product';
import CartContext from '../../../context/cart'

type ProductListItemProps = {
    product: Product
}

export default function ProductListItem(props:ProductListItemProps):ReactElement{
    const { image, name, price, description } = props.product
    const { addProduct } = useContext(CartContext)

    const onPurchase = ()=>{
        addProduct(props.product)
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
            <button onClick={onPurchase}>Comprar</button>
        </li>
    )
}