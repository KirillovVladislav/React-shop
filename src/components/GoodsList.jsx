import {GoodsItem} from './GoodsItem'

function GoodList({ goods, addToBasket}) {
    if (!goods.length) {
        return <h3>ошибка</h3>
    }

    return <div className="goods">
        {
            goods.map((item) => (
                <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
            ))
        }
    </div>
}

export {GoodList}