import './App.css'
import Header from './components/Header'
import { Footer } from './components/Footer'


function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-grow flex items-center justify-center bg-gray-100'>
        <h1 className='text-3xl font-bold text-blue-600'>Welcome to Space Commerce</h1>
      </main>

      <Footer />
    </div>
    
  )
}

export default App
