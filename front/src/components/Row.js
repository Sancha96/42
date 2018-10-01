import React, { Component } from 'react';
import PropTypes from "prop-types";
import info from "../img/info.png";
import site from "../img/site.png";
import white_paper from "../img/white_paper.png";
import "../styles/Row.css";
import Socials from "./Socials";

const mobile = window.innerWidth <= 640 ||
    (window.orientation !== 0 && window.innerWidth <= 812);
const fields_mobile = ['name', 'score', 'status'];

class Row extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            mount: false,
            heightBlockInfo: 35
        }
    }

    componentDidMount() {
        let heightBlockInfo = this.state.heightBlockInfo;

        if (this.transformColumn) {
            switch (this.transformColumn.children.length) {
                case 1:
                    heightBlockInfo += 52;
                    break;
                case 2:
                    heightBlockInfo += 104;
                    break;
                default:
                    heightBlockInfo += 0;
            }
        }
        if (this.left)
            heightBlockInfo += 103;

        this.setState({
            heightBlockInfo
        })
    }

    identifyColor = score => {
        const number = parseInt(score.replace(/%/g, ''), 10);
        const r = number < 50 ? 255 : Math.floor(255 - (number * 2 - 100) * 255 / 100);
        const g = number > 50 ? 245 : Math.floor((number * 2) * 255 / 100);

        return `rgb(${r}, ${g}, 0)`;
    };

    render() {
        const {open, heightBlockInfo} = this.state;
        const {data} = this.props;

        return (
            <div className={`container flex-col ${open ? 'open' : ''}`}
                 style={{height: mobile && open && heightBlockInfo ? heightBlockInfo + 85 : open ? 135 : 55}}>
                <div className="row flex-row" onClick={() => this.setState({
                    open: !open
                })}>
                    {
                        Object.keys(data).map((field, key) => {
                            let color = '';

                            if (field === 'score') {
                                color = this.identifyColor(data[field])
                            }

                            return (field !== 'additional' && field !== 'image' && !mobile) ||
                                (mobile && fields_mobile.indexOf(field) !== -1) ?
                                <div key={key} style={{color: color}}>
                                    {
                                        field === 'name' && data.image &&
                                        <div className="img flex-row">
                                            <img src={data.image} alt="" />
                                        </div>
                                    }
                                    <div className="text">
                                        {
                                            data[field]
                                        }
                                    </div>
                                </div> :
                                null
                        })
                    }
                    {
                        !mobile &&
                        <div>
                            <img className={`${open ? 'up' : 'down'}`} src={info} alt=""/>
                        </div>
                    }
                </div>
                <div className="info" style={{height: mobile && heightBlockInfo ? heightBlockInfo : 20}}>
                    {
                        mobile && <div className="transform_column flex-col"
                                       ref={(transformColumn) => this.transformColumn = transformColumn }>
                            {
                                data.start || data.end ?
                                <div className="date flex-row">
                                    {
                                        data.start &&
                                        <div className="start flex-row">
                                            <div className="key">
                                                ICO START
                                            </div>
                                            <div className="value">
                                                {
                                                    data.start
                                                }
                                            </div>
                                        </div>
                                    }
                                    {
                                        data.end &&
                                        <div className="end flex-row">
                                            <div className="key">
                                                ICO END
                                            </div>
                                            <div className="value">
                                                {
                                                    data.end
                                                }
                                            </div>
                                        </div>
                                    }
                                </div> :
                                    null
                            }
                            {
                                data.industry &&
                                <div className="industry flex-row">
                                    <div className="key">
                                        INDUSTRY
                                    </div>
                                    <div className="value">
                                        {
                                            data.industry
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {
                        !mobile || (data.additional.website || data.additional.whitePaper) ?
                        <div className="left flex-row"
                             ref={(left) => this.left = left}>
                            {
                                data.additional.website ?
                                    <div className="flex-row"
                                         onClick={() => window.open(data.additional.website, "_blank")}>
                                        <div className="flex-row">
                                            <img src={site} alt=""/>
                                        </div>
                                        <a className="text">
                                            {
                                                data.additional.website
                                            }
                                        </a>
                                    </div> : null
                            }
                            {
                                data.additional.whitePaper ?
                                    <div className="flex-row">
                                        <div className="flex-row">
                                            <img src={white_paper} alt=""/>
                                        </div>
                                        <a className="text">
                                            {
                                                data.additional.whitePaper
                                            }
                                        </a>
                                    </div> : null
                            }
                        </div> :
                            null
                    }
                    <div className="right flex-row" ref={(right) => this.right = right}>
                        <div className="flex-row">
                            <Socials styles={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#7f7f7f',
                                marginLeft: '10px'
                            }} color="white" fontSize="12px"/>
                        </div>
                        {
                            !mobile &&
                            <a className="more">
                                More info
                            </a>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Row.propTypes = {
    data: PropTypes.object
};

export default Row