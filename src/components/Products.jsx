import ProductGrid from './ProductGrid'
import { useQuery } from '@tanstack/react-query';
import Filters from './Filters';
import { useState } from 'react';
import { productService } from '../services/ProductService';


const Products = () => {
    const [filters, setFilters] = useState({
        category: '',
        sort: 'asc',
    });

    const {data, error, isLoading} = useQuery({
        queryKey:['products', filters],
        queryFn: () => productService.getProducts(filters),
    });

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