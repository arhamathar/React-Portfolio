import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Modal from './components/UI/Modal';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import './App.css';
import { ModalContext } from './context/ModalContext';
import Details from './components/Details';
import details from './assets/data/details';

function App() {
    const [show, setShow] = useContext(ModalContext);
    const [projectDetails, setProjectDetails] = useState({
        id: "",
        title: "",
        description: "",
        techs: []
    });

    const showModal = (e, id) => {
        const currentDetail = details.find((project) => {
            return project.id === id;
        });

        setProjectDetails(currentDetail);
        setShow(true)
    }

    const closeModal = () => {
        setShow(false);
    }

    return (
        <BrowserRouter>
            <div className="container">
                <Modal show={show} close={closeModal} >
                    <Details details={projectDetails} />
                </Modal>
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
                                <Projects showModal={showModal} />
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
