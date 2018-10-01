import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/HeadTable.css";
import sort from "../img/sort_up.png";
import sort_blue from "../img/sort_blue.png";

const mobile = window.innerWidth <= 640 ||
    (window.orientation !== 0 && window.innerWidth <= 812);
const headers = !mobile ? ['start', 'end', 'ico name', 'avg score', 'status', 'industry'] :
    ['ico name', 'avg score', 'status'];

class HeadTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortColumn: 'avg score',
            direction: true
        }
    }

    onClickSort = column => {
        const {sortColumn, direction} = this.state;
        const {onClickColumn} = this.props;

        if (onClickColumn) {
            onClickColumn();
        }

        this.setState({
            sortColumn: column,
            direction: sortColumn === column && direction !== null ? !direction : true
        })
    };

    render() {
        const {sortColumn, direction} = this.state;

        return (
            <div className="head text-upper flex-row">
                {
                    headers.map((title, key) => {
                        return <div className="flex-row" key={key}
                                    onClick={() => this.onClickSort(title)}>
                            <div className="text">{title}</div>
                            {
                                !mobile &&
                                <div className="sort flex-col">
                                    <img className="sort-up" src={sortColumn === title && direction ? sort_blue : sort}
                                         alt=""/>
                                    <img className="sort-down"
                                         src={sortColumn === title && !direction ? sort_blue : sort}
                                         style={{transform: 'rotate(180deg)'}} alt=""/>
                                </div>
                            }
                        </div>
                    })
                }
                {
                    !mobile && <div>info</div>
                }
            </div>
        );
    }
}

HeadTable.propTypes = {
    onClickColumn: PropTypes.func
};

export default HeadTable