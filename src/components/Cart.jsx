import {useContext} from 'react'
import {ShopContext} from '../context'

function Cart() { 
    
    const {handleShowBasket, order} = useContext(ShopContext)

    const quantity = order.length

    return (
        <div className="cart blue darken-4 white-text" onClick={() =>  handleShowBasket()}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{ quantity}</span> : null }
        </div>
    )
}

export {Cart}