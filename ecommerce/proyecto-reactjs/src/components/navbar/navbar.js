import './navbar.css'
import CartWidget from '../CartWidget/cartwidget'


const Navbar = () => {
    return (
        <nav>
            <h1>CipreCommerce</h1>
            <div>
                <button>Home</button>
                <button>About Us</button>
                <button>Log In</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar