import React, {Component} from "react";
import arrow from "../img/related_event_arrow.png";
import image_events_1 from "../img/event_image.png";
import image_events_2 from "../img/event_image_3.png";
import image_events_3 from "../img/event_image_2.png";
import logo1 from "../img/ev_logo.png";
import logo2 from "../img/ev_logo2.png";
import logo3 from "../img/ev_logo3.png";
import "../styles/RelatedEvents.css";
import DateVertical from "./DateVertical";

class RelatedEvents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        }
    }

    render() {
        const {open} = this.state;

        return (
            <div className="RelatedEvents flex-row" style={{marginBottom: `${open ? '60px' : '20px'}`}}>
                <div className="container">
                    <div className="caption flex-row" onClick={() => this.setState({open: !open})}>
                        <div className="text text-upper">
                            Related events
                        </div>
                        <div className="line"/>
                        <div className={`arrow ${!open ? 'transform' : ''}`}>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className={`content ${open ? 'visible' : ''}`}>
                        <ul className={`list_events flex-row ${open ? 'visible' : ''}`}>
                            <li className="event flex-col">
                                <div className="image flex-row"
                                     style={{background: `url(${image_events_1}) 50% 50% / cover no-repeat`}}>
                                    <DateVertical fontSizeDay={'25px'}
                                                  fontSizeMonth={'14px'}
                                                  fontSizeYear={'12px'}
                                                  lineHeight={'initial'}
                                                  color={'#fff'}/>
                                </div>
                                <div className="bottom flex-row">
                                    <div className="left flex-row"
                                         style={{background: `url(${logo1}) 100% 50% / 150% no-repeat`}}>
                                    </div>
                                    <div className="right flex-col">
                                        <div className="caption">
                                            CryptoBlockCon — London
                                        </div>
                                        <div className="location flex-row">
                                            <div className="icon">
                                                <i className="fa fa-map-marker" aria-hidden="true"/>
                                            </div>
                                            <div className="text">
                                                London, United Kingdom
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="event flex-col">
                                <div className="image flex-row"
                                     style={{background: `url(${image_events_2}) 50% 50% / cover no-repeat`}}>
                                    <DateVertical fontSizeDay={'25px'}
                                                  fontSizeMonth={'14px'}
                                                  fontSizeYear={'12px'}
                                                  day={'19'}
                                                  month={'oct'}
                                                  year={'2018'}
                                                  lineHeight={'initial'}
                                                  color={'#fff'}/>
                                </div>
                                <div className="bottom flex-row">
                                    <div className="left flex-row"
                                         style={{background: `url(${logo2}) 100% 50% / 150% no-repeat`}}>
                                    </div>
                                    <div className="right flex-col">
                                        <div className="caption">
                                            CryptoBlockCon — London
                                        </div>
                                        <div className="location flex-row">
                                            <div className="icon">
                                                <i className="fa fa-map-marker" aria-hidden="true"/>
                                            </div>
                                            <div className="text">
                                                London, United Kingdom
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="event flex-col">
                                <div className="image flex-row"
                                     style={{background: `url(${image_events_3}) 50% 50% / cover no-repeat`}}>
                                    <DateVertical fontSizeDay={'25px'}
                                                  fontSizeMonth={'14px'}
                                                  fontSizeYear={'12px'}
                                                  day={'25'}
                                                  month={'oct'}
                                                  year={'2018'}
                                                  lineHeight={'initial'}
                                                  color={'#fff'}/>
                                </div>
                                <div className="bottom flex-row">
                                    <div className="left flex-row"
                                         style={{background: `url(${logo3}) 100% 50% / 150% no-repeat`}}>
                                    </div>
                                    <div className="right flex-col">
                                        <div className="caption">
                                            CryptoBlockCon — London
                                        </div>
                                        <div className="location flex-row">
                                            <div className="icon">
                                                <i className="fa fa-map-marker" aria-hidden="true"/>
                                            </div>
                                            <div className="text">
                                                London, United Kingdom
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default RelatedEvents