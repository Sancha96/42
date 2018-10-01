import React, {Component} from 'react';
import EventsList from "../EventsList";
import Search from "../Search";
import SearchMobile from "../SearchMobile";
import "../../styles/Events.css";

const mobile = window.innerWidth <= 640 ||
    (window.orientation !== 0 && window.innerWidth <= 812);

class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: sessionStorage.getItem('mode') || 'list'
        }
    }

    render() {
        const {mode} = this.state;

        return (
            <div className="Events">
                <div className="top_row">
                    {
                        !mobile ? <Search/> : <SearchMobile />
                    }
                </div>
                <EventsList mode={mode} {...this.props}/>
            </div>
        );
    }
}

export default Events