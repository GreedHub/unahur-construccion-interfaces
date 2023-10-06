import { ReactElement, useContext } from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material'
import { ProductWithQuantity } from '../../../../types/product';
import CartContext from '../../../../context/cart'
import './styles.scss'

type CartItemProps = {
    item: ProductWithQuantity
}

export default function CartItem(props: CartItemProps):ReactElement{    
    const { id, name, quantity, price } = props.item
    const { removeProduct } = useContext(CartContext)

    const onDelete = ()=>{
        removeProduct(id)
    }

    return (
        <li className='cart-items__item'>
            <div className='cart-items__item-title'>{name} ({quantity})</div>
            <div className='cart-items__item-price'>$ {price}</div>
            <DeleteIcon className='cart-items__item-delete' onClick={onDelete}/>
        </li>
    )
}