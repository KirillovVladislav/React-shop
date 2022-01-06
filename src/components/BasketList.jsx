import {useContext} from 'react'
import {ShopContext} from '../context'
import { BasketItem } from './BasketItem'


function BasketList() { 
    
    const {order,handleShowBasket} = useContext(ShopContext)

    const totalPrice = order.reduce((sum, orderItem) => {
       return sum + orderItem.price* orderItem.quantity 
    }, 0)

    return <ul className="collection basket-list">
        <li  className="collection-item active">Корзина </li>
        {
            order.length ? order.map(orderItem => (
                <BasketItem
                    key={orderItem.id}
                    {...orderItem}
                   
                />
            ))
                : <li class="collection-item">Корзина пуста</li>
        }
        <li className="collection-item active">
            общая стоимость - {totalPrice} руб.
            
        </li>
        
        <i class="material-icons basket-close" onClick={() => handleShowBasket()}>close</i>
    </ul>
}

export { BasketList }

