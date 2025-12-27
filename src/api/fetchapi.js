export const getProducts = async () => {
    const PRODUCTS_URL = "https://fakestoreapi.com/products";
    const response = await fetch(PRODUCTS_URL);
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } 

export const getProduct = async () => {
  const params = Math.floor(Math.random() * 20) + 1; 
  const PRODUCT_URL = `https://fakestoreapi.com/products/${params}`
  const response = await fetch(PRODUCT_URL);
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
}