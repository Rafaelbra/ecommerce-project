import PropTypes from 'prop-types'
import { useCategories } from '../hooks/useCategories';


const Filters = ({ filters, onFilter }) => {
    const {data, error, isLoading} = useCategories()

if (isLoading) return <aside className="w-1/4 p-4 bg-white">Loading categories...</aside>;
if (error) return <aside className="w-1/4 p-4 bg-white">Failed to load categories</aside>;


    return(
        <aside className='w-1/4 p-4 bg-white pb-4'>
            <div className='mb-4'>
                <h3 className='text-lg font-semibold mb-4'>Sort by</h3>
                <select 
                    onChange={(e) => onFilter((prev) => ({...prev, sort: e.target.value}))}
                    className='w-full p-2 border rounded-md'>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            <div className='mb-4'>
                <h3 className='text-lg font-semibold mb-4'>Categories</h3>
                <div className='flex flex-wrap gap-2'>
                    <button onClick={() => onFilter((prev) => ({...prev, category: ''}))} className={`px-3 py-1 rounded-full capitalize ${
                        filters.category === '' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 '
                     }`}> 
                        All products
                    </button>
                    {data.map((category) => (
                        <button 
                         key={category} 
                         onClick={() => onFilter((prev) => ({...prev, category}))}
                         className={`px-3 py-1 rounded-full capitalize ${
                        filters.category === category 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                     }`}> 
                        {category}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    )
}

Filters.propTypes = {
    filters: PropTypes.shape({
        category: PropTypes.string,
        sort: PropTypes.string,
        maxPrice: PropTypes.number
    }),
    onFilter: PropTypes.func.isRequired,
};

export default Filters

