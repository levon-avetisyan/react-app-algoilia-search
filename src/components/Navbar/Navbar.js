import React, { Component } from 'react';

class Navbar extends Component {
    render() {
      return (
            <nav className="navbar navbar-expand-lg align-self-start">
                <div className="container">
                    <a className="navbar-brand" href="/">Android Stash</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Get in touch</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
  
export default Navbar;