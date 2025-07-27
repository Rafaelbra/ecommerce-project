import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types'
import axios from 'axios';

const fetchCategories = async () => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products/categories');
        return data;
    } catch (error) {
        console.log('Error fetching categories:',error);
    } return []; // Return an empty array on error
}


const Filters = ({onFilter}) => {
    const {data, error, isLoading} = useQuery({
    queryKey:['categories'],
    queryFn: fetchCategories,
});

if (isLoading) return <aside className="w-1/4 p-4 bg-white">Loading categories...</aside>;
if (error) return <aside className="w-1/4 p-4 bg-white">Failed to load categories</aside>;


    return(
        <aside className='w-1/4 p-4 bg-white pb-4'>

            <div>
                <h3 className='text-lg font-semibold mb-4'>Categories</h3>
                <div className='flex flex-wrap gap-2'>
                    <button onClick={() => onFilter({ category: ''})} className='px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300'> 
                        All products
                    </button>
                    {data.map((category) => (
                        <button 
                         key={category} 
                         onClick={() => onFilter({ category })}
                         className='px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 capitalize'
                        > 
                        {category}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    )
}

Filters.propTypes = {
    onFilter: PropTypes.func.isRequired,
};

export default Filters

