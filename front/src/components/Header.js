import React, { Component } from 'react';
import logo from "../img/logo.png";
import logo_small from "../img/logo_sticky_header.png";
import backgroundMobile from "../img/background-header_mobile.png";
import background from "../img/background-header.png";
import "../styles/Header.css";
import MobileMenu from "./MobileMenu";
import search from "../img/search.png";
import 'react-sticky-header/styles.css';
import { Sticky } from 'react-sticky';

const mobile = window.innerWidth <= 640 ||
    (window.orientation !== 0 && window.innerWidth <= 812);
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

class Header extends Component {
    /*compensation = (isSticky, wasSticky) => {
        const main = document.getElementsByTagName('main');

        if (main && main[0]) {
            if (isSticky && !wasSticky) {
                main[0].style.paddingTop = '130px';
            } else if (!isSticky && wasSticky) {
                main[0].style.paddingTop = '65px';
            }
        }
    };*/

    render() {
        const pathname = window.location.pathname.split('/');
        window.scroll(0, 0);

        return (
            <Sticky topOffset={1}
                    disableCompensation
                    //relative={mobile}
                    relative
                    disableHardwareAcceleration={mobile}>
                {({
                      style,
                      isSticky
                  }) => (
                    <header style={style} className={`header flex-row ${!mobile && isSticky ? 'sticky' : ''}`}>
                        <div className="bg" style={{
                            background: `url(${mobile ? backgroundMobile : background}) no-repeat`,
                            backgroundSize: '140%'
                        }}/>
                        <div className="left flex-row">
                            <img onClick={() => this.props.router.push('/')}
                                 className={`logo ${!mobile ? '' : ''}`}
                                 src={isSticky ? logo_small : logo} alt=""/>
                        </div>
                        <div className="right text-upper">
                            {
                                !mobile &&
                                <div className="menu_desktop flex-row">
                                    <ul>
                                        {
                                            titles.map((title, key) => {
                                                return <li key={key}
                                                           className={`${title.link &&
                                                           pathname[pathname.length - 1] === title.link ? 'checked' : ''}`}
                                                           onClick={() =>  this.props.router.push(title.link)}>
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
                            }
                            {
                                !mobile &&
                                <div className="input">
                                    <input id="search" placeholder="Search"/>
                                    <img src={search} alt=""/>
                                </div>
                            }
                            <div className="caption">
                                the answer
                            </div>
                            <div className="description">
                                {
                                    !mobile ? ['for The Ultimate Question', <br key={'br1'}/>,
                                            'of Life, the Universe,', <br key={'br2'}/>, 'and Everything.'] :
                                        'for The Ultimate Question of Life, the Universe, and Everything.'
                                }
                            </div>
                        </div>
                        {
                            mobile && <MobileMenu {...this.props}/>
                        }
                    </header>
                )}
            </Sticky>
        );
    }
}

export default Header


/*



 */