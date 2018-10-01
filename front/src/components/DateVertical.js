import React, {Component} from "react";
import PropTypes from 'prop-types';
import "../styles/DateVertical.css";

class DateVertical extends Component {
    render() {
        const {fontSizeDay, fontSizeMonth, fontSizeYear, day, month, year, lineHeight, color} = this.props;

        return (
            <div className="DateVertical text-upper flex-col" style={{color}}>
                <div className="day" style={{fontSize: fontSizeDay, lineHeight: lineHeight}}>{day}</div>
                <div className="month" style={{fontSize: fontSizeMonth, lineHeight: lineHeight}}>{month}</div>
                <div className="year" style={{fontSize: fontSizeYear, lineHeight: lineHeight}}>{year}</div>
            </div>
        );
    }
}

DateVertical.propTypes = {
    color: PropTypes.string,
    day: PropTypes.any,
    month: PropTypes.any,
    year: PropTypes.any,
    fontSizeDay: PropTypes.string,
    fontSizeMonth: PropTypes.string,
    fontSizeYear: PropTypes.string,
    lineHeight: PropTypes.string
};

DateVertical.defaultProps = {
    day: '17',
    month: 'oct',
    year: '2018'
};

export default DateVertical