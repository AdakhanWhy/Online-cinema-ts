import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return(
        <nav className="navbar container">
            <span><NavLink to='/'>Logo</NavLink></span>
            <ul>
                <li><NavLink to='/movies'>Movies</NavLink></li>
                <li><NavLink to='/aboutus'>About us</NavLink></li>
                <li><NavLink to='/contactus'>Contact us</NavLink></li>
            </ul>
            <button onClick={() => navigate('/login')}>Sign in</button>
        </nav>
    )
}

export default Navbar;