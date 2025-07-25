import './App.css'
import Header from './components/Header'
import { Footer } from './components/Footer'
import ProductGrid from './components/ProductGrid'
import { useState } from 'react'
import Filters from './components/Filters'

const products = [
  {id: 1, title: 'Smart Phone', price:666, url:''},
  {id: 2, title: 'Computer', price:333, url:''},
  {id: 3, title: 'Camera', price:999, url:''},
  {id: 4, title: 'Watch', price:369, url:''},
]

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleFilter = (filterType) => {
    if (filterType === 'under500') {
      setFilteredProducts(products.filter(product => product.price < 500))
    } else {
      setFilteredProducts(products)
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-grow flex bg-gray-100'>
        <Filters onFilter={handleFilter}/>

        <section className='flex-grow p-4'>
          <ProductGrid products={filteredProducts}/>
        </section>
      </main>

      <Footer />
    </div>
  )
}



export default App
