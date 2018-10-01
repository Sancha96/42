import React, {Component} from 'react';
import icon_list from "../img/mode_list.png";
import icon_block from "../img/mode_block.png";
import "../styles/Search.css";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: sessionStorage.getItem('mode') || 'list'
        }
    }

    render() {
        const {mode} = this.state;

        return (
            <div className="search flex-row">
                <div className="events_from flex-col">
                    <div className="key text-upper">
                        Events from
                    </div>
                    <div className="value">
                        <input/>
                    </div>
                </div>
                <div className="search_value flex-col">
                    <div className="key text-upper">
                        Search
                    </div>
                    <div className="value">
                        <input/>
                    </div>
                </div>
                <div className="near flex-col">
                    <div className="key text-upper">
                        near
                    </div>
                    <div className="value">
                        <input/>
                    </div>
                </div>
                <div className="button">
                    <button className="text-upper">find events</button>
                </div>
                <div className="view_as">
                    <div className="key text-upper">
                        View as
                    </div>
                    <div className="value flex-row">
                        <img className={`mode ${mode === 'list' ? 'checked' : ''}`} id="list" src={icon_list} alt="" onClick={() => {
                            sessionStorage.setItem('mode', 'list');

                            this.setState({
                                mode: 'list'
                            })
                        }}/>
                        <img className={`mode ${mode === 'block' ? 'checked' : ''}`} id="block" src={icon_block} alt="" onClick={() => {
                            sessionStorage.setItem('mode', 'block');

                            this.setState({
                                mode: 'block'
                            })
                        }}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search