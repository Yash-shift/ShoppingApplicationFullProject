import { useEffect, useState } from "react";
import Product from "../components/Product"
import Spinner from "../components/Spinner"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loading,setLoading] = useState(false)
  const[posts,setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data= await res.json();
      setPosts(data);

    }
    catch(error){
      console.log("error",error);
      setPosts([]);

    }
    setLoading(false);
    
  }
  useEffect(()=>{
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading ? <Spinner></Spinner>:
        posts.length > 0 ? 
        (<div className="grid grid-cols-4 max-w-6xl mx-auto
        space-y-10 space-x-5 ">
          {
          posts.map((post) => (
            <Product key={post.id} post={post}/>
          ))}
          </div>):
          <div className="flex justify-center items-center">
            <p>No products found</p>
          </div>

        
      }
    </div>
  )
};

export default Home;
