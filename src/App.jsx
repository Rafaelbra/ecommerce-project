import './App.css'
import Header from './components/Header'
import { Footer } from './components/Footer'
import ProductGrid from './components/ProductGrid'
import { useState } from 'react'

const products = [
  {id: 1, title: 'Smart Phone', price:666, url:''},
  {id: 2, title: 'Computer', price:333, url:''},
  {id: 3, title: 'Camera', price:999, url:''},
  {id: 4, title: 'Watch', price:369, url:''},
]


function App() {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const showFilteredProducts = () => {
    setFilteredProducts(products.filter(product => product.price < 500))
  }

  const showAllProducts = () => {
    setFilteredProducts(products)
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-grow flex bg-gray-100'>
        <aside className='w-1/4 p-4 bg-white pb-4'>
        <h2 className='text-lg font-semibold mb-4'>Filters</h2>
          <button className='block w-full px-4 py-2 my-2 text-white rounded bg-blue-500'
          onClick={showFilteredProducts}
          >
            Under $500</button>
          <button className='block w-full px-4 py-2 my-2 text-white rounded bg-gray-500'
          onClick={showAllProducts}
          >
            Show all products</button>
        </aside>

        <section className='flex-grow p-4'>
          <ProductGrid products={filteredProducts}/>
        </section>
      </main>
      

      <Footer />
    </div>
    
  )
}



export default App
