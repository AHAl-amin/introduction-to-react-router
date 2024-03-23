import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
          
            <nav>
                <span>My website</span>
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">contact</Link>
                <Link to="/posts">Posts</Link>
                
            </nav>
            
        </div>
    );
};

export default Navbar;