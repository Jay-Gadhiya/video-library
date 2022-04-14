import "./Navbar.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';


export const Navbar = () => {
    return (
        <nav className="vid-nav-container" >
            <p className="vid-brand-name">SkyNET</p>
            <div className="vid-search-container">
                <AiOutlineSearch className="search-icon" />
                <input className="vid-search-input" type="search" name="search" placeholder="Search..." />
            </div>
            <div className="vid-profile-container">
                <FaUser className="vid-user-icon" />
                <p className="vid-user-name" >Hi, Admin</p>
            </div>
        </nav>
    )
}
