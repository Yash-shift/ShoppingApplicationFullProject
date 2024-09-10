import { useSelector } from "react-redux";
import { useState , useEffect} from "react";
import CartItem from "../components/CartItem"
import { Link } from "react-router-dom";



const Cart = () => {

  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount]= useState(0);
  useEffect(()=>{
   setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])

  return (
    <div>{ 
      cart.length > 0 ?
      (<div>

        <div>
          {
            cart.map((item,index)=>{
              return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
            })
          }
        </div>

        <div>
          <div>YourCart</div>
          <div>Summary</div>
          <p>
            <span>Total Items :{cart.length} </span>
          </p>
        </div>
        <div>
          <p>
            TOTAL Amount: {totalAmount}
          </p>
        </div>


        
      </div>):
      (
        <div>
           <h1>Cart empty</h1>
           <Link to={"/"}>
           <button>Shop Now</button></Link>
        </div>
      )
      }

    </div>

  )
};

export default Cart;
