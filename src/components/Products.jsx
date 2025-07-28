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

    if (error) return <div>Error when fetching the products</div>

  return (
    <main className='flex-grow flex bg-gray-100'>
        <Filters filters={filters} onFilter={setFilters}/>
        <ProductGrid products={data} loading={isLoading}/> 
    </main>
  )
};

export default Products