import React, {Component} from "react";
import image from "../../img/event_image.png";
import logo from "../../img/ev_logo.png";
import telephone_icon from "../../img/telephone_icon.png";
import date_icon from "../../img/date_icon.png";
import website_icon from "../../img/site.png";
import RelatedEvents from "../RelatedEvents";
import "../../styles/Event.css";
import DateVertical from "../DateVertical";
import Map from "../Map";
import MapMobile from "../MapMobile";

const mobile = window.innerWidth <= 640 ||
    (window.orientation !== 0 && window.innerWidth <= 812);

class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event_id: props.params.number
        }
    }

    render() {
        return (
            <div className="Event">
                <div className="top_row flex-row">
                    <div className="left flex-col">
                        <a className="small_text text-upper">
                            Cryptocurrency
                        </a>
                        <div className="caption text-upper">
                            Crypto
                            BlockCon
                            London
                        </div>
                        {
                            !mobile &&
                            <div className="location flex-row">
                                <div className="icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"/>
                                </div>
                                <div className="text">
                                    London, United Kingdom
                                </div>
                            </div>
                        }
                    </div>
                    <div className="right">
                        <div className="image">
                            <img src={image} alt=""/>
                            <img className="logo" src={logo} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="main flex-row">
                    {
                        !mobile &&
                        <div className="left flex-col">
                            <div className="block">
                                <div className="caption">
                                    What is CryptoBlockCon?
                                </div>
                                <div className='description'>
                                    CryptoBlockCon’s traveling events showcase companies who are using blockchain
                                    technology
                                    to improve industries with increased efficiency, security and transparency, educate
                                    current and future industry participants on blockchain technology, and ultimately
                                    serve
                                    as a platform to connect industry participants to assist in the adoption and
                                    implementation of blockchain.
                                </div>
                            </div>
                            <div className="block">
                                <div className="caption">
                                    Who is CryptoBlockCon?
                                </div>
                                <div className='description'>
                                    The CryptoBlockCon team is a tight knit group of event professionals with close to
                                    20
                                    years experience producing executive-level, leadership-oriented programs in emerging
                                    and
                                    highly fragmented industries.
                                </div>
                            </div>
                            <div className="block">
                                <div className="caption">
                                    Why CryptoBlockCon?
                                </div>
                                <div className='description'>
                                    The CryptoBlockCon team is in a unique position to leverage decades of event
                                    experience
                                    and relationships to curate and organize informative, impactful, and educational
                                    blockchain focused programs, providing attendees with the necessary insights and
                                    tangible relationships to move forward in the fragmented and quickly changing
                                    blockchain
                                    industry.
                                </div>
                            </div>
                        </div>
                    }
                    <div className="right flex-col">
                        {
                            !mobile &&
                            <div className="quote">
                                <div className="text">
                                    CryptoBlockCon’s traveling events showcase companies who are using blockchain
                                    technology
                                    to improve industries with increased efficiency
                                </div>
                                <div className="author">
                                    © Bla-bla-bla
                                </div>
                            </div>
                        }
                        {
                            !mobile &&
                            <div className="event flex-row">
                                <DateVertical/>
                                <div className="name text-upper">
                                    Crypto
                                    BlockCon
                                    London
                                </div>
                            </div>
                        }
                        <div className="description flex-row">
                            {mobile && <DateVertical fontSizeYear={'16px'}
                                                     fontSizeDay={'30px'}
                                                     fontSizeMonth={'18px'}/>}
                            <div className="text">
                                CryptoBlockCon’s traveling events
                                showcase companies who are using
                                blockchain technology
                            </div>
                        </div>
                        <div className="info flex-row">
                            <div className="left flex-col">
                                {
                                    mobile &&
                                    <div className="date flex-row contact">
                                        <div className="icon">
                                            <img src={date_icon} alt=""/>
                                        </div>
                                        <div className="value">
                                            12.10.2018
                                        </div>
                                        <div className="time">
                                            18:00
                                        </div>
                                    </div>
                                }
                                <div className="location flex-row contact">
                                    <div className="icon">
                                        <i className="fa fa-map-marker" aria-hidden="true"/>
                                    </div>
                                    <div className="value">
                                        London, United Kingdom
                                        6/7 Kensington Palace Gardens
                                    </div>
                                </div>
                                <div className="phones flex-row contact">
                                    <div className="icon">
                                        <img src={telephone_icon} alt=""/>
                                    </div>
                                    <div className="contacts flex-col">
                                        <div className="value">
                                            +44 (0) 20 7229 6412
                                        </div>
                                        <div className="value">
                                            +44 (0) 20 7229 7281
                                        </div>
                                    </div>
                                </div>
                                <div className="site flex-row contact">
                                    <div className="icon">
                                        <img src={website_icon} alt=""/>
                                    </div>
                                    <a className="value">
                                        cryptoblockcon.com
                                    </a>
                                </div>
                            </div>
                            {
                                mobile &&
                                <div className="right flex-row">
                                    <MapMobile/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {
                    !mobile &&
                    <RelatedEvents/>
                }
                {
                    !mobile &&
                    <Map/>
                }
            </div>
        );
    }
}

export default Event