import React, { PropTypes as T } from 'react';
import Seat from './Seat.jsx';
import Blank from './Blank.jsx';
import RowNumber from './RowNumber.jsx';
import style from '../style/Row.scss';
import cx from 'classnames';

export default class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            over: false
        };
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
        const { selectSeat, rowNumber, isSelected: isRowSelected, selectedSeat } = this.props;
        const bold = over || isRowSelected;
        const seats = this.props.seats.map((seat, index) => {
            if (seat === null) return <Blank key={index}/>;
            const props = {
                selectSeat: selectSeat.bind(this, rowNumber, seat.number),
                isSelected: isRowSelected && seat.number === selectedSeat.number,
                seatNumber: seat.number,
                key: index
            };
            return <Seat {...props} />;
        });
        const className = cx(
            'Row',
            { 'Row--enabled': !isRowSelected },
            { 'Row--selected': isRowSelected }
        );
        return (
            <div
                className={className}
                onMouseOut={this.handleMouseMove.bind(this, false)}
                onMouseOver={this.handleMouseMove.bind(this, true)}
            >
                <RowNumber rowNumber={rowNumber} bold={bold} />
                {seats}
            </div>
        );
    }
}
