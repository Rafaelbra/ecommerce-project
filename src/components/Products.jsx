import React from 'react'
import { useEffect, useState } from 'react'
import ProductGrid from './ProductGrid'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProduct () {
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data);
            
        }
        fetchProduct();
    }, []);

  return (
    <section className='flex-grow p-4'>
        <ProductGrid products={products}/>
    </section>
  )
}

export default Products