import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function BackDrop(props) {
    return (<div className={classes.backdrop} onClick={props.onClick}></div>)
};

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlay');

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop onClick={props.onBackdropClick} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
};

export default Modal;