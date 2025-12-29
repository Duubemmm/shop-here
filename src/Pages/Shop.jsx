import { getProducts } from "../api/fetchapi";
import { useState, useEffect } from "react"

const Shop = () => {
    const [product, setProduct] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
                setIsLoading(true);
                setError(false)
                const productList = await getProducts(); 
                console.log(productList)
                setProduct(productList);
                setIsLoading(false)
            
        };
        
        fetchProducts();
    }, []);

    if (isLoading) return <p className="text-center py-20 text-xl">Loading products...</p>;
    if (error) return <p className="text-red-600"> Error</p>;

    return (
        <section className="py-16 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Shop All Products</h1>
                    <p className="text-gray-600">{product.length} products available</p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {product.map((item) => (
                        <div 
                            key={item.id} 
                            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                        >
                            {/* Image Container */}
                            <div className="bg-gray-50 p-6 flex items-center justify-center h-64">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-3 uppercase">
                                    {item.category}
                                </span>
                                
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
                                    {item.title}
                                </h3>
                                
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-2xl font-bold text-green-600">
                                        ${item.price}
                                    </span>
                                    
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Shop;