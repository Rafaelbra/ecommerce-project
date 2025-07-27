import ProductGrid from './ProductGrid'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';



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
    <section className='flex-grow p-4'>
        <ProductGrid products={data}/>   
    </section>
  )
};

export default Products