import { VscChromeClose } from 'react-icons/vsc';
import { usePlayList } from '../../context/playList-context';
import { useState } from "react";
import "./playlistModal.css";

export const PlaylistModal = () => {

    const {  openModal, setOpenModal } = usePlayList();
    const [openForm, setOpenForm] = useState(false);

    return (
        <>
            <main className="modal-main-container">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Save to...</h3>
                        <VscChromeClose onClick={() => setOpenModal(false)} className='cancle-icon' />
                    </div>

                    <div className="playlist-select-container">
                        <label className='playlist-label' htmlFor="playlist-select">
                            <input className='playlist-checkbox' type="checkbox" name="playlist-select" />
                            fist
                        </label>

                        <label className='playlist-label' htmlFor="playlist-select">
                            <input className='playlist-checkbox' type="checkbox" name="playlist-select" />
                            fist
                        </label>
                        
                    </div>
                    
                    {
                        openForm
                        ?
                        <form className="add-playlist-form">
                            <input className='create-plalist-input w100 b-radius' placeholder='Playlist Name' type="search" name="playlist" required/>
                            <button class="btn btn-primary w100 b-radius">Create</button>
                        </form>
                        :
                        <div className="create-playlist-btn">
                            <button onClick={() => setOpenForm(true)} className="create-btn"><span>+</span> Create Playlist </button>
                        </div>
                    }

                </div>
            </main>
        </>
    )
}
