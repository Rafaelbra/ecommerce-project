import { NavLink } from "react-router"
import checkoutImage from '../assets/checkoutImage.png'

const Header = () => {
  return (
    <header className='bg-blue-600 text-white p-4 flex justify-between items-center'>
        <NavLink to='/' className='hover:opacity-80 transition-opacity'>
          <h1 className='text-lg font-bold'>SpacEcommerce</h1>
        </NavLink>
        <NavLink to='/cart' className='p-2 hover:bg-blue-700 transition-colors rounded-full'>
        <img src={checkoutImage} alt='Checkout' className="h-6 w-6 invert"></img></NavLink>
    </header>
  )
}

export default Header