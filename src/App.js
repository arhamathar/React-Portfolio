import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="app-container">
                    <Sidebar />
                    <main>
                        About
                    </main>
                </div>
                {/* <div className="circle"></div> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
