import  { useContext, React} from 'react'
import { ShopContext } from '../context/ShopContext'
import '../pages/CSS/ShopCategory.css'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'


const ShopCategory = (props) => {
const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
        <div className='shop-category-container'>
              <p> Showing 12 products 
                <span>
                 out of 36 products...
                </span>
              </p>
              <div className="shopcategory-sort">
               sort by <img className='dropdown-icon' src={dropdown_icon} alt="" />
              </div>
        </div>
        <div className="shopcategory-products" style={{ cursor: 'pointer' }}>
          {all_product.map((item , i) => {
            if(props.category=== item.category) {
              return <Item  key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else {
              return null
            }
          })}
        </div>
    </div>
  )
}

export default ShopCategory