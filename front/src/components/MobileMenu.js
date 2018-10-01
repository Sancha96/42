import React, { Component } from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import logo from "../img/logo_menu_mobile.png";
import logo_text from "../img/logo_text.png";
import search_icon_mobile from "../img/search_icon_mobile.png";
import "../styles/MobileMenu.css";
import burger from "../img/burger.png";
import mail_icon from "../img/mail_icon.png";
import site_icon from "../img/site.png";
import whitepaper_icon from "../img/white_paper.png";
import telegram from "../img/telegram.png";
import twitter from "../img/twitter.png";

const modalRoot = document.body;
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

class MobileMenu extends Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
        this.el.className = 'ReactModal';
        this.state = {
            isOpen: false
        }
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    render() {
        const {isOpen} = this.state;
        const pathname = window.location.pathname.split('/');
        /*const body = document.body;

        if (isOpen)
            body.style.overflowY = 'hidden';
        else
            body.style.overflowY = 'scroll';*/

        return (
            <div className={`burger ${isOpen ? 'shift' : ''}`} onClick={() => {
                document.body.scrollTo(0, 0);
                this.setState({isOpen: !isOpen})
            }}>
                <img src={burger} alt=""/>
                {
                    ReactDOM.createPortal(
                        <div className={`MobileMenu ${isOpen ? 'open' : ''}`}>
                            <div className="popup-overlay">
                                <div className="popup-content">
                                    <div className="top_row flex-row" onClick={() => this.props.router.push('/')}>
                                        <div className="left">
                                            <img src={logo} alt="" />
                                        </div>
                                        <div className="right">
                                            <img src={logo_text} alt="" />
                                        </div>
                                    </div>
                                    <div className="menu__search">
                                        <input placeholder="Search" />
                                        <img src={search_icon_mobile} alt="" />
                                    </div>
                                    <div className="items">
                                        <ul>
                                            {
                                                titles.map((item, key) => {
                                                    return <li className={`item ${item.link &&
                                                    pathname[pathname.length - 1] === item.link ? 'checked' : ''}`}
                                                               key={key} onClick={() =>  this.props.router.push(item.link)}>
                                                            {
                                                                item.name
                                                            }
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="email flex-row">
                                        <div className="icon">
                                            <img src={mail_icon} alt="" />
                                        </div>
                                         <a href="mailto:help@42ceoinico.com" >
                                             help@42ceoinico.com
                                         </a>
                                    </div>
                                    <div className="site flex-row">
                                        <div className="icon">
                                            <img src={site_icon} alt="" />
                                        </div>
                                        <a>wepowernetwork.org</a>
                                    </div>
                                    <div className="whitePaper flex-row">
                                        <div className="icon">
                                            <img src={whitepaper_icon} alt="" />
                                        </div>
                                        <a>Whitepaper</a>
                                    </div>
                                    <div className="icons">
                                        <img className="telegram" src={telegram} alt="" />
                                        <img className="twitter" src={twitter} alt="" />
                                    </div>
                                </div>
                            </div>
                    </div>, this.el)
                }
            </div>
        );
    }
}

MobileMenu.propTypes = {
    closeModal: PropTypes.func,
    checked: PropTypes.string
};

MobileMenu.defaultProps = {
    checked: ''
};

export default MobileMenu;
