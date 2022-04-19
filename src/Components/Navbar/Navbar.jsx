import "./Navbar.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { useAuth } from "../../context/authentication-context";
import { Link } from "react-router-dom";


export const Navbar = () => {

    const { authState, getUser } = useAuth();

    return (
        <nav className="vid-nav-container" >
            <p className="vid-brand-name">SkyNET</p>
            <div className="vid-search-container">
                <AiOutlineSearch className="search-icon" />
                <input className="vid-search-input" type="search" name="search" placeholder="Search..." />
            </div>
            <div className="vid-profile-container">
                {
                    authState.token
                    ?
                    
                    <Link to="/profile/">
                        <FaUser className="vid-user-icon" />
                        <p className="vid-user-name" >Hy, {getUser.firstName}</p>
                    </Link>
                    
                    :
                    <Link to="/login">
                        <FaUser className="vid-user-icon" />
                        <p className="vid-user-name" >Login</p>
                    </Link>

                }
            </div>
        </nav>
    )
}
