import React, { PropTypes as T } from 'react';
import Seat from './Seat.jsx';
import Blank from './Blank.jsx';
import RowNumber from './RowNumber.jsx';
import style from '../style/Row.scss';

export default class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = { over: false };
    }

    static propTypes = {
        rowNumber: T.number.isRequired,
        seats: T.array
    }

    handleMouseMove = (over) => {
        this.setState({ over });
    }

    render() {
        const { over } = this.state;
        const seats = this.props.seats.map((seat, index) => {
            if (seat === null) return <Blank key={index}/>;
            return <Seat seatNumber={seat.number} key={index} />;
        });

        return (
            <div
                className="Row"
                onMouseOut={this.handleMouseMove.bind(this, false)}
                onMouseOver={this.handleMouseMove.bind(this, true)}
            >
                <RowNumber rowNumber={this.props.rowNumber} over={over} />
                {seats}
            </div>
        );
    }
}
