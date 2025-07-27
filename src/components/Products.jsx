import ProductGrid from './ProductGrid'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import Filters from './Filters';



const fetchProducts = async () => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
    return data;
    } catch (error) {
        console.log(error);
    }
}

const productPromise = fetchProducts();

const Products = () => {
    const {data, error, isLoading} = useQuery({
        queryKey:['products'],
        queryFn: fetchProducts,
    });

    if (isLoading) return <div>Loading products...</div>
    if (error) return <div>Error when fetching the products</div>

  return (
    <main className='flex-grow flex bg-gray-100'>
        <Filters onFilter={() => {}}/>
        <ProductGrid products={data}/> 
    </main>
    
  )
};

export default Products