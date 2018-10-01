import React, { Component } from 'react';
import logo from "../img/logo.png";
import "../styles/Footer.css";
import Socials from "./Socials";

const socials = {
    'telegram': '',
    'twitter': ''
};
const titles = [
    {
        name: 'ico base',
        link: ''
    },
    {
        name: 'events',
        link: 'events'
    },
    {
        name: 'news',
        link: ''
    },
    {
        name: 'exchanges',
        link: ''
    },
    {
        name: 'about 42',
        link: ''
    }
];

class Footer extends Component {
    render() {
        const pathname = window.location.pathname.split('/');

        return (
            <footer className="footer flex-row">
                <div className="container flex-col">
                    <div className="menu flex-row text-upper">
                        <ul>
                            {
                                titles.map((title, key) => {
                                    return <li key={key}
                                               className={`${title.link &&
                                               pathname[pathname.length - 1] === title.link ? 'checked' : ''}`}
                                               onClick={() => this.props.router.push(title.link)}>
                                        <a>
                                            {
                                                title.name
                                            }
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="bottom flex-row">
                        <div className="logo flex-row">
                            <img onClick={() => this.props.router.push('/')}
                                 src={logo} alt="" />
                        </div>
                        <div className="socials flex-col">
                            <div className="text">
                                We are in social networks:
                            </div>
                            <Socials socials={socials}/>
                        </div>
                        <div className="subscription flex-col">
                            <div className="text">
                                Subscribe to ICO Rating news, rating updates and other new features
                            </div>
                            <div className="input">
                                <input placeholder="Your e-mail"/>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                        <div className="info flex-row" onClick={() => window.open("mailto:info@42.ico", "_blank")}>
                            <a className="ico flex-row">
                                <i className='fa fa-envelope'/>
                            </a>
                            <a className="email">
                                info@42.ico
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer