function Cart({quantity}) { 
    return (
        <div className="cart blue darken-4 white-text">
            <i class="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{ quantity}</span> : null }
        </div>
    )
}

export {Cart}