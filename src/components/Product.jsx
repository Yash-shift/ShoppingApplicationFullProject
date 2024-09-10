import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added Successfully");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed Successfully");
  };

  const { cart } = useSelector((state) => state);
  return (
    <div
      className="flex flex-col items-center
    hover:scale-110 transition duration-300 
    shadow-xl shadow-blue-200 ease-in justify-between mt-10 rounded-lg p-4 outline outline-gray-200"
    >
      <div className="text-black font-bold text-lg truncate w-40 mt-2">
        <p>{post.title.split("").slice(0, 20).join("") + "..."}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px]">
          {post.description.split("").slice(0, 40).join("") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img className="h-full w-full" src={post.image} alt="product" />
      </div>

      <div className="flex justify-between gap-20 w-full">
        <div className="text-green-800 font-bold text-sm">
          <p>${post.price}</p>
        </div>
        <div className="flex flex-col justify-center">
          <button
            onClick={addToCart}
            className="text-sm 
            hover:bg-gray-800 hover:text-white transition-300 ease-in text-black border border-black rounded-xl px-2 py-2 mt-2 mb-2"
          >
            Add to Cart
          </button>
          <button
            onClick={removeFromCart}
            className="text-sm hover:bg-gray-800 hover:text-white transition-300 ease-in  text-black border border-black rounded-xl px-2 py-2 mt-2 mb-2"
          >
            Remove Item
          </button>
        </div>
      </div>
      {/* {cart.some((p) => p.id == post.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart}>Remove from Cart</button>
      )} */}
    </div>
  );
};

export default Product;
