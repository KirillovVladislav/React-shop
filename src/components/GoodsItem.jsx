

function GoodsItem({addToBasket,id,name, description, full_background,price}) {
  
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
          <button className="btn" onClick={() => addToBasket({id, price,name})}>купить </button>
                    <span className="right" style={{fontSize:'1.8rem'}}>{ price}</span>
        </div>
      </div>
    
    )
           
}

export {GoodsItem}