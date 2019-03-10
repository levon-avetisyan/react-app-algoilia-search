import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="/">Cool stuff</a></li>
                                <li><a className="text-muted" href="/">Random feature</a></li>
                                <li><a className="text-muted" href="/">Team feature</a></li>
                                <li><a className="text-muted" href="/">Stuff for developers</a></li>
                                <li><a className="text-muted" href="/">Another one</a></li>
                                <li><a className="text-muted" href="/">Last time</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="/">Resource</a></li>
                                <li><a className="text-muted" href="/">Resource name</a></li>
                                <li><a className="text-muted" href="/">Another resource</a></li>
                                <li><a className="text-muted" href="/">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="/">Team</a></li>
                                <li><a className="text-muted" href="/">Locations</a></li>
                                <li><a className="text-muted" href="/">Privacy</a></li>
                                <li><a className="text-muted" href="/">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;