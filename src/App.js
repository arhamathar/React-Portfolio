import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="app-container">
                    <Sidebar />
                    <main>
                        <Navbar />
                    </main>
                </div>
            </div>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </BrowserRouter>
    );
}

export default App;
