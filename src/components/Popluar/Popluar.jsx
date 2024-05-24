import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item';


const Popluar = () => {
  return (
    <div className="popluar">
        <h1>Popluar Collections</h1>
        <hr/>
        <div className="popular-items">
            {data_product.map((item , i) => {
              return <Item key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popluar;