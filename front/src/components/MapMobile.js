import React, {Component} from "react";
import ReactDOM from "react-dom";
import map_icon_white from "../img/show_map_white.png";
import map_icon from "../img/show_map.png";
import "../styles/MapMobile.css";
import {compose, withProps} from "recompose";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

const modalRoot = document.body;
const API_KEY = "AIzaSyCBn2p7iRIpx-JR1t39ACyAu9qT52TVCBI";
const MyMapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `590px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: -34.397, lng: 150.644}}
    >
        {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
    </GoogleMap>
);

class MapMobile extends Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
        this.el.className = 'MobileMap';
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    render() {
        const {open} = this.state;
        const header = document.getElementsByTagName('header');

        if (header && header[0]) {
            if (open)
                header[0].style.zIndex = '7';
            else
                header[0].style.zIndex = 'initial';
        }

        return (
            <div className="map_mobile"
                 style={{zIndex: open ? '8' : 'initial'}}
                 onClick={(e) => {
                     if (!this.map.contains(e.target)) {
                         this.setState({open: !open})
                     }
                 }}>
                <img src={open ? map_icon_white : map_icon} alt="" />
                {
                    ReactDOM.createPortal(
                        <div className={`modal ${open ? 'open' : ''}`}>
                            <div className="popup-overlay">
                                <div className="popup-content" ref={(map) => this.map = map}>
                                    <MyMapComponent
                                        isMarkerShown
                                    />
                                </div>
                            </div>
                        </div>, this.el)
                }
            </div>
        );
    }
}

export default MapMobile