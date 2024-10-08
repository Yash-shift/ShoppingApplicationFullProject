import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import{ add,remove} from "../redux/Slices/CartSlice";
import {toast } from "react-hot-toast";

const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();
  
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("item removed");
    
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="item"></img>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
          <div>
            <MdOutlineDelete onClick={removeFromCart}/>
          </div>
        </div> 
  
      </div>
    </div>
  )
};

export default CartItem;
