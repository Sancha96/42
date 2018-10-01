import React, {Component} from "react";
import arrow from "../img/search_arrow.png";
import "../styles/SearchMobile.css";

class SearchMobile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    render() {
        const {open} = this.state;

        return (
            <div className={`search_mobile ${open ? 'open' : ''}`}>
                <div className="caption flex-row" onClick={() => this.setState({open: !open})}>
                    <div className="text text-upper">
                        search
                    </div>
                    <div className="arrow">
                        <img className={`${open ? 'transform' : ''}`} src={arrow} alt="" />
                    </div>
                </div>
                <div className="filter flex-col">
                    <input placeholder="Date"/>
                    <input placeholder="Keyword"/>
                    <input placeholder="Category"/>
                    <button className="text-upper">find</button>
                </div>
            </div>
        );
    }
}

export default SearchMobile