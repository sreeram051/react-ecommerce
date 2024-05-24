import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';


const Item = (props) => {
  return (
    <div className="product-item">
    <Link to={`/product/${props.id}`}><img src={props.image} alt="" onClick={window.scrollTo(0,0)}/></Link>
        <p> {props.name} </p>
        <div className="product-prices">
            <div className="product-prices-new">
                ${props.new_price}
            </div>
            <div className="product-prices-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item;