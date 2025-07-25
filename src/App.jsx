import './App.css'
import Header from './components/Header'
import { Footer } from './components/Footer'
import ProductGrid from './components/ProductGrid'

const products = [
  {id: 1, title: 'Smart Phone', price:666},
  {id: 2, title: 'Computer', price:333},
  {id: 3, title: 'Camera', price:999},
  {id: 4, title: 'Watch', price:369},
]

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-grow flex items-center justify-center bg-gray-100'>

        <ProductGrid products={products}/>
      </main>
      

      <Footer />
    </div>
    
  )
}

export default App
