import React from 'react';
import Backdrop from './Backdrop';
import './Modal.css';

function Modal(props) {
    return (
        <React.Fragment>
            <Backdrop show={props.show} close={props.close} />
            <div className="modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >{props.children}
            </div>
        </React.Fragment>
    );
}

export default Modal;
