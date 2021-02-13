import React from 'react';

function Backdrop(props) {
    const styleClass = {
        width: '100%',
        height: '100%',
        zIndex: '100',
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        background: 'linear-gradient(to right top, rgba(46, 191, 145, .95), rgba(131, 96, 195, .95))'
    }
    return (
        props.show && <div style={styleClass} onClick={props.close} />
    );
}

export default Backdrop;
