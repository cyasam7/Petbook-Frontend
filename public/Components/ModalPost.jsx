import React from 'react'
import Modal from './Modal';
import me from '../assets/static/me.jpg'
function ModalPost({isOpen, onClose}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="Modal-Post__container">
                <figure>
                    <img src="" alt=""/>
                </figure>
                <div>
                    <div>
                        <span><img src={me} alt="Foto"/></span>
                        <span>Alexander Serrano</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalPost
