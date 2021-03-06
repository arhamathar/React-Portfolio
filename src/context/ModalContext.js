import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = (props) => {
    const [show, setShow] = useState(false);

    return (
        <ModalContext.Provider value={[show, setShow]}>
            {props.children}
        </ModalContext.Provider>
    );
}