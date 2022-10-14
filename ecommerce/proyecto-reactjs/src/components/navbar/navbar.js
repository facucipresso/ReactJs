import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
      <NavLink to='/'>
        <h1>CipreCommerce</h1>
      </NavLink>

        <div className="Categories">
            <NavLink to={'/category/celular'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
            <NavLink to={'/category/tablet'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>About Us</NavLink>
            <NavLink to={'/category/notebook'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Log In</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar