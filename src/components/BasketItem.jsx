function BasketItem({  name, price, quantity,removeFromBasket,id ,incQuantity,decQuantity }) {
    console.log(id)
    
    return <li class="collection-item">
        {name}
        <i class="material-icons basket-quantity" onClick={() => decQuantity(id)} >remove</i>
        x{quantity}
        <i class="material-icons basket-quantity" onClick={() => incQuantity(id)} >add</i> = {price * quantity} руб.
        <span
            class="secondary-content"
            onClick={() => removeFromBasket(id)}>
            <i class="material-icons basket-delete">close</i>
        </span>
    </li>
}


export {BasketItem}