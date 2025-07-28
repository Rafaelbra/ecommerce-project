import ProductGrid from './ProductGrid'
import Filters from './Filters';
import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';


const Products = () => {
    const [filters, setFilters] = useState({
        category: '',
        sort: 'asc',
    });

    const {data, error, isLoading} = useProducts(filters)

    if (isLoading) return <div>Loading products...</div>
    if (error) return <div>Error when fetching the products</div>

  return (
    <main className='flex-grow flex bg-gray-100'>
        <Filters filters={filters} onFilter={setFilters}/>
        <ProductGrid products={data}/> 
    </main>
  )
};

export default Products