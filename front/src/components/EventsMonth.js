import React, {Component} from 'react';
import arrow from "../img/related_event_arrow.png";
import image1 from "../img/event_image.png";
import image2 from "../img/event_image_2.png";
import image3 from "../img/event_image_3.png";
import logo1 from "../img/ev_logo.png";
import logo2 from "../img/ev_logo2.png";
import logo3 from "../img/ev_logo3.png";
import "../styles/EventsMonth.css";
import DateVertical from "./DateVertical";
import {Link} from "react-router";

const mobile = window.innerWidth <= 640 ||
    (window.orientation !== 0 && window.innerWidth <= 812);

class EventsMonth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        }
    }

    render() {
        const {open} = this.state;

        return (
            <div className="month flex-col">
                <div className="caption flex-row" onClick={() => this.setState({open: !open})}>
                    <div className="text text-upper">
                        October 2018
                    </div>
                    <div className="line"/>
                    <div className={`arrow ${!open ? 'transform' : ''}`}>
                        <img src={arrow} alt=""/>
                    </div>
                </div>
                <div className={`blocks flex-col ${open ? 'open' : ''}`}>
                    <div className="block flex-row" onClick={() => this.props.router.push('/events/2')}>
                        <div className="left flex-col">
                            <a className="small_text text-upper">
                                Cryptocurrency
                            </a>
                            <div className="info flex-row">
                                <DateVertical fontSizeDay={!mobile ? '25px' : '30px'}
                                              fontSizeMonth={!mobile ? '14px' : '16px'}
                                              fontSizeYear={!mobile ? '12px' : '15px'} day={'04'}/>
                                <div className="name text-upper">
                                    The New Era
                                    of Blockchain
                                </div>
                            </div>
                            <div className="location flex-row">
                                <div className="icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"/>
                                </div>
                                <div className="text">
                                    London, United Kingdom
                                </div>
                            </div>
                            <div className="logo">
                                <img src={logo1} alt="" />
                            </div>
                        </div>
                        <div className="right" style={{background: `url(${image1}) 50% 50% / cover no-repeat`}}>
                            <div className="description flex-col">
                                <div className="text">
                                    Blockchain is the latest phenomenon to hit the Tech World. Malta, a leader in DLT,
                                    is right at the centre of this innovation.
                                    Delta Summit will be providing a series of high profile speakers who will discuss
                                    far ranging topics of interest to CEOs, academics, lawyers, traders, bankers,
                                    regulators, software developers, entrepreneurs, and crypto enthusiasts.
                                </div>
                                <div className="continue text-upper flex-row">
                                    <Link to={'/events/2'}>continue >></Link>
                                </div>
                            </div>
                            <div className="logo flex-row"
                                 style={{background: `url(${logo1}) 100% 50% / cover no-repeat`}}>
                            </div>
                        </div>
                    </div>
                    <div className="block flex-row" onClick={() => this.props.router.push('/events/2')}>
                        <div className="left flex-col">
                            <a className="small_text text-upper">
                                Cryptocurrency
                            </a>
                            <div className="info flex-row">
                                <DateVertical fontSizeDay={!mobile ? '25px' : '30px'}
                                              fontSizeMonth={!mobile ? '14px' : '16px'}
                                              fontSizeYear={!mobile ? '12px' : '15px'}/>
                                <div className="name text-upper">
                                    Discover
                                    Start Ups
                                    & Meet
                                    Investors
                                </div>
                            </div>
                            <div className="location flex-row">
                                <div className="icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"/>
                                </div>
                                <div className="text">
                                    London, United Kingdom
                                </div>
                            </div>
                            <div className="logo">
                                <img src={logo2} alt="" />
                            </div>
                        </div>
                        <div className="right" style={{background: `url(${image2}) 50% 50% / cover no-repeat`}}>
                            <div className="description flex-col">
                                <div className="text">
                                    Blockchain is the latest phenomenon to hit the Tech World. Malta, a leader in DLT,
                                    is right at the centre of this innovation.
                                    Delta Summit will be providing a series of high profile speakers who will discuss
                                    far ranging topics of interest to CEOs, academics, lawyers, traders, bankers,
                                    regulators, software developers, entrepreneurs, and crypto enthusiasts.
                                </div>
                                <div className="continue text-upper flex-row">
                                    <Link to={'/events/2'}>continue >></Link>
                                </div>
                            </div>
                            <div className="logo flex-row"
                                 style={{background: `url(${logo2}) 100% 50% / cover no-repeat`}}>
                            </div>
                        </div>
                    </div>
                    <div className="block flex-row" onClick={() => this.props.router.push('/events/2')}>
                        <div className="left flex-col">
                            <a className="small_text text-upper">
                                Cryptocurrency
                            </a>
                            <div className="info flex-row">
                                <DateVertical fontSizeDay={!mobile ? '25px' : '30px'}
                                              fontSizeMonth={!mobile ? '14px' : '16px'}
                                              fontSizeYear={!mobile ? '12px' : '15px'} day={'29'}/>
                                <div className="name text-upper">
                                    Delta Summit
                                    Malta
                                </div>
                            </div>
                            <div className="location flex-row">
                                <div className="icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"/>
                                </div>
                                <div className="text">
                                    London, United Kingdom
                                </div>
                            </div>
                            <div className="logo">
                                <img src={logo3} alt="" />
                            </div>
                        </div>
                        <div className="right" style={{background: `url(${image3}) 50% 50% / cover no-repeat`}}>
                            <div className="description flex-col">
                                <div className="text">
                                    Blockchain is the latest phenomenon to hit the Tech World. Malta, a leader in DLT,
                                    is right at the centre of this innovation.
                                    Delta Summit will be providing a series of high profile speakers who will discuss
                                    far ranging topics of interest to CEOs, academics, lawyers, traders, bankers,
                                    regulators, software developers, entrepreneurs, and crypto enthusiasts.
                                </div>
                                <div className="continue text-upper flex-row">
                                    <Link to={'/events/2'}>continue >></Link>
                                </div>
                            </div>
                            <div className="logo flex-row"
                                 style={{background: `url(${logo3}) 100% 50% / cover no-repeat`}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventsMonth