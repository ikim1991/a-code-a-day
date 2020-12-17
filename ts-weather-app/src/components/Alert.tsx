import React, {FC} from 'react';

interface AlertProps{
    message: string
    onClose: () => void
}

const Alert: FC<AlertProps> = ({message, onClose}) => {
    
    return(
        <div className='alert modal'>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modalcard-head">
                    <p className="modal-card-title">{message}</p>
                </header>
                <footer className="modal-card-foot" style={{justifyContent: 'center'}}>
                    <button className="button" onClick={onClose}>Close</button>
                </footer>
            </div>
        </div>
    )
}

export default Alert;