import React from 'react'
import { useEffect, useState } from 'react'
import ProductGrid from './ProductGrid'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct () {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setProducts(response.data);
            } catch(error) {
                alert('Error fetching products')
                console.log(alert)
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, []);

    if (loading) return <div>Loading products...</div>;

  return (
    <section className='flex-grow p-4'>
        <ProductGrid products={products}/>
    </section>
  )
}

export default Products