import {useContext} from 'react'
import {ShopContext} from '../context'

function GoodsItem({id,name, description, full_background,price}) {
  
    const {addToBasket} = useContext(ShopContext)

    return (
    
      <div className="card">
        <div className="card-image">
                    <img src={full_background} alt={ name}/>
                    
         
        </div>
            <div className="card-content">
                    <span className="card-title">{ name}</span>
                    <p>{description }</p>
                </div>
                <div className="card-action">
          <button
            className="btn"
            onClick={() => addToBasket({ 
              id,
              price,
              name
            })}>
            купить
          </button>
          <span
            className="right"
            style={{ fontSize: '1.8rem' }}>
            {price} руб.
          </span>
        </div>
      </div>
    
    )
           
}

export {GoodsItem}