import React, {Component} from "react";
import PropTypes from 'prop-types';
import "../styles/EventsList.css";
import EventsMonth from "./EventsMonth";

class EventsList extends Component {
    render() {
        return (
            <div className="EventsList flex-row">
                <EventsMonth {...this.props}/>
            </div>
        );
    }
}

EventsList.propTypes = {
    mode: PropTypes.string
};

EventsList.defaultProps = {
    mode: 'list'
};

export default EventsList