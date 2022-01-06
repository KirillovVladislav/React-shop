import React,{ useEffect, useContext}  from  'react'
import { API_KEY, API_URL } from '../config'

import { ShopContext } from '../context'
    
import { Cart } from './Cart'
import { GoodList } from './GoodsList'
import { Preloader } from './Preloader'
import { BasketList } from './BasketList'
import {Alert} from './Alert'


function Shop() {

    const {loading,order,basketShow,setGoods, alertName} = useContext(ShopContext)
        
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
            })
            .then(response => response.json())
            .then((data) => {
                setGoods(data.featured)
            })
        //eslint-disable-next-line
    }, [])

    return <main className="container content">
        <Cart  quantity={order.length} />
        {
            loading
                ?  <Preloader /> 
                :  <GoodList /> 
             
        }
        {
            basketShow && <BasketList/>
        }
        {
            alertName && <Alert />
        }
    </main>
}

export {Shop}