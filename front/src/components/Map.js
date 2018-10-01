import React, {Component} from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import arrow from "../img/related_event_arrow.png";
import "../styles/Map.css";

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
let timeout = null;

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            isMarkerShown: false
        }
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    componentWillUnmount() {
        if (timeout)
            clearTimeout(timeout)
    }

    delayedShowMarker = () => {
        timeout = setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    };

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false });
        this.delayedShowMarker()
    };

    render() {
        const {open} = this.state;

        return (
            <div className="Map flex-row">
                <div className="container flex-col">
                    <div className="caption flex-row" onClick={() => this.setState({open: !open})}>
                        <div className="text text-upper">
                            Map
                        </div>
                        <div className="line"/>
                        <div className={`arrow ${!open ? 'transform' : ''}`}>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className={`content ${open ? 'visible' : ''}`}>
                        <MyMapComponent
                            isMarkerShown={this.state.isMarkerShown}
                            onMarkerClick={this.handleMarkerClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Map