import React,{useState, useEffect}  from  'react'
import {API_KEY, API_URL} from '../config'
import { Cart } from './Cart'
import { GoodList } from './GoodsList'
import { Preloader } from './Preloader'
import {BasketList} from './BasketList'


function Shop() {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [basketShow, setBasketShow] = useState(false)


    const handleBasketShow = () => { 
        setBasketShow(!basketShow)
    }

    const removeFromBasket = (itemId) => {
      setOrder( order.filter(orderItem => orderItem.id !== itemId))
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(orderItem => {
            if (orderItem.id === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
               }
            } else {
                return orderItem
           }
        })
        setOrder(newOrder)
   }

    const decQuantity = (itemId) => {
        const newOrder = order.map(orderItem => {
            if (orderItem.id === itemId) {
                const newQuantity = orderItem.quantity -1
                return {
                    ...orderItem,
                    quantity: newQuantity  >= 1 ? newQuantity : 1
               }
            } else {
                return orderItem
           }
        })
        setOrder(newOrder)
   }

    const addToBasket = (item) => {
        console.log(item)

    
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
        console.log(itemIndex)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })

            setOrder(newOrder)
        }


     } 

    
    
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
            })
            .then(response => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured)
                setLoading(false)
            })
    }, [])

    return <main className="container content">
        <Cart handleBasketShow={handleBasketShow} quantity={order.length} />
        {
            loading ?
                <Preloader /> :
                <GoodList
                    goods={goods}
                    addToBasket={addToBasket}
                />
        }
        {
            basketShow &&
            <BasketList
                order={order}
                removeFromBasket={removeFromBasket}
                handleBasketShow={handleBasketShow}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
            />
        }
    </main>
}

export {Shop}