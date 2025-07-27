import { lazy, Suspense, use } from 'react'
import axios from 'axios'



const fetchProducts = async () => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
    return data;
    } catch (error) {
        alert('Error fetching products');
        console.log(error);
    }
}

const productPromise = fetchProducts();

const Products = () => {
    const products = use(productPromise)

    const ProductGrid = lazy(() => 
    new Promise(resolve => setTimeout(() => resolve(import('./ProductGrid')), 100)) // simulating delay
);
   
  return (
    <section className='flex-grow p-4'>
        <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid products={products}/>
        </Suspense>
        
    </section>
  )
}

export default Products