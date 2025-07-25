import React from 'react'
import PropTypes from 'prop-types'

const ProductGrid = ({ products }) => {


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {products.map((product) => 
      <div key={product.id} className='p-4 bg-white rounded shadow'>
          <img src="" alt={product.title} className='h-40 mx-auto mb-4 object-contain'/>
          <h2 className='text-lg font-semibold'>{product.title}</h2>
          <p className='text-gray-700 mt-2'>${product.price}</p>
      </div>)}
    </div>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductGrid