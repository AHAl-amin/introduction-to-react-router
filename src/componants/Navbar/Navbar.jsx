import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
          
            <nav>
                <span>My website</span>
                <Link to="/">Home</Link>
                <NavLink to="/user">User</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/contact">Contact</NavLink>
               <NavLink to="/posts">Posts</NavLink>
               
                
                
            </nav>
            
        </div>
    );
};

export default Navbar;