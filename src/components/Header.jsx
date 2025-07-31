import { NavLink } from "react-router"
import checkoutImage from '../assets/checkoutImage.png'
import { use } from "react"
import { CartContext } from "../context/CartContext"

const Header = () => {
  const {cartCount} = use(CartContext)

  return (
    <header className='bg-blue-600 text-white p-4 flex justify-between items-center'>
        <NavLink to='/' className='hover:opacity-80 transition-opacity'>
          <h1 className='text-lg font-bold'>SpacEcommerce</h1>
        </NavLink>
        <NavLink to='/cart' className='p-2 hover:bg-blue-700 transition-colors rounded-full relative'>
        <img src={checkoutImage} alt='Checkout' className="h-6 w-6 invert"></img></NavLink>
        {cartCount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
        )}
    </header>
  )
}

export default Header