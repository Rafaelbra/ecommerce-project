import './App.css'
import Header from './components/Header'
import { Footer } from './components/Footer'
import Products from './components/Products'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet, Route, Routes } from 'react-router'

const queryClient = new QueryClient();

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />    
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
 return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Products />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App
