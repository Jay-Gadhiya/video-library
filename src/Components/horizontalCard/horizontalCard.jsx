import "./horizontalCard.css";
import { FaTrashAlt } from 'react-icons/fa';

export const HorizontalCard = () => {

    return (
        <div className="horizontal-card-container">
            <div className="horizontal-img-wrapper">
                <img className="horizontal-card-img" src="https://i.ytimg.com/vi/BYzsaTaosAU/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB0eKbR2Xxmcnj4VIeIJ2OBhmO5VQ" alt="img" />
                <span className="time-stamp">17:24</span>
            </div>
            <div className="horizontal-card-body">
                <p className="horizontal-card-title">Beloved : Novel by Toni Morrison in Hindi</p>
                <p className="horizontal-card-channel">Study Lovers</p>
            </div>
            <FaTrashAlt className="trash-icon" />
        </div>
    )
}