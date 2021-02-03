import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="app-container">
                    <Sidebar />
                    <main>
                        <Navbar />
                        <Switch>
                            <Route exact path="/">
                                <About />
                            </Route>
                            <Route path="/resume">
                                <Resume />
                            </Route>
                            <Route path="/projects">
                                <Projects />
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                    </main>
                </div>
            </div>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
        </BrowserRouter>
    );
}

export default App;
