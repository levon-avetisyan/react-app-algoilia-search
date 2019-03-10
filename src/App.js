import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';


fontawesome.library.add(solid, brands);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Hero />
                    <Search/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;