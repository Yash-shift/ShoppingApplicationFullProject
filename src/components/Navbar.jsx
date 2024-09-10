import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

// const {cart}=useSelector((state) => state);

  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="data:image/png;base64,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"
              alt="logo"
              className="h-14 w-[90px]"
            />
          </div>
        </NavLink>
        
        <div className="flex items-center text-slate-100 mr-5 space-x-6 font-medium">

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <AiOutlineShoppingCart  className="animate-bounce text-2xl"/>
              {/* <span>{cart.length}</span> */}

            </div>
          </NavLink>

        </div>

      </nav>
    </div>
  );
};

export default Navbar;
