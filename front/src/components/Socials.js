import React, { Component } from 'react';
import PropTypes from "prop-types";
import "../styles/Socials.css";

class Socials extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    toggleHover() {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        const {socials, styles, color, fontSize} = this.props;

        return (
            <div className="icons flex-row">
                {
                    Object.keys(socials).map(key => {
                        return <a className={`social flex-row ${key}`}
                                  style={styles}
                                  onClick={() => window.open(socials[key], "_blank")}
                                  onMouseEnter={() => this.toggleHover()}
                                  onMouseLeave={() => this.toggleHover()}
                                  key={key}>
                            <i style={{color, fontSize}} className={`fa fa-${key}`}/>
                        </a>
                    })
                }
            </div>
        );
    }
}

Socials.propTypes = {
    socials: PropTypes.object,
    color: PropTypes.string,
    styles: PropTypes.object,
    fontSize: PropTypes.string
};

Socials.defaultProps = {
    socials: {
        'facebook': '',
        'linkedin': '',
        'instagram': '',
        'google-plus': '',
        'twitter': '',
        'github': ''
    },
    color: '#40474e',
    fontSize: '16px'
};

export default Socials