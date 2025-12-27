import { useState, useEffect } from "react"
import { getProduct } from "../api/fetchapi";

const DisplayProduct = () => {
  const [currentProduct, setCurrentProduct] = useState(null); 

  // Function to fetch and display a new product
  const fetchAndDisplayProduct = async () => {
    const data = await getProduct();
    setCurrentProduct(data);
  };

  // Auto-swipe every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchAndDisplayProduct();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Manual swipe button handler
  const handleSwipe = () => {
    fetchAndDisplayProduct();
  };


  return (
    <section className="flex ">

      {currentProduct && (
        <div>
          <img 
            src={currentProduct.image} 
            alt={currentProduct.title}
            style={{ width: "200px", height: "auto" }} 
          />
        </div>
      )}
      
      <button onClick={handleSwipe}> </button>
    </section>
  )
}

export default DisplayProduct;