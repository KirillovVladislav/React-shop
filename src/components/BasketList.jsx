import {BasketItem} from './BasketItem'


function BasketList({ order, removeFromBasket, handleBasketShow }) { 
    
    const totalPrice = order.reduce((sum, orderItem) => {
       return sum + orderItem.price* orderItem.quantity 
    }, 0)

    return <ul className="collection basket-list">
        <li  className="collection-item active">Корзина </li>
        {
            order.length? order.map(orderItem => (
                <BasketItem key={orderItem.id} {...orderItem} removeFromBasket={removeFromBasket}/>
            ))
                : <li class="collection-item">Корзина пуста</li>
        }
        <li className="collection-item active">общая стоимость - { totalPrice }</li>
        <i class="material-icons basket-close" onClick={() => handleBasketShow()}>close</i>
    </ul>
}

export { BasketList }

