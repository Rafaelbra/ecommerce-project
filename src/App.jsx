import './App.css'
import Header from './components/Header'
import { Footer } from './components/Footer'
import ProductGrid from './components/ProductGrid'
import { useState } from 'react'
import Filters from './components/Filters'
import Products from './components/Products'


function App() {
  const [filteredProducts, setFilteredProducts] = useState()

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

        <Products />
      </main>

      <Footer />
    </div>
  )
}



export default App
