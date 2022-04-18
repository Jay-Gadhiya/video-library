import "./Navbar.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { useAuth } from "../../context/authentication-context";
import { Link } from "react-router-dom";


export const Navbar = () => {

    const { authState } = useAuth();

    return (
        <nav className="vid-nav-container" >
            <p className="vid-brand-name">SkyNET</p>
            <div className="vid-search-container">
                <AiOutlineSearch className="search-icon" />
                <input className="vid-search-input" type="search" name="search" placeholder="Search..." />
            </div>
            <div className="vid-profile-container">
                <FaUser className="vid-user-icon" />
                {
                    authState.token
                    ?
                    <Link to="/profile/"><p className="vid-user-name" >My Profile</p></Link>
                    :
                    <Link to="/login"><p className="vid-user-name" >Login</p></Link>
                }
                
            </div>
        </nav>
    )
}
