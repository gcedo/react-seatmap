import React, { PropTypes as T } from 'react';
import Row from './Row';
import Immutable, { Map, Set } from 'immutable/dist/immutable.min.js';
import Seat from './Seat';
import Blank from './Blank';

export default class Seatmap extends React.Component {

    static propTypes = {
        addSeatCallback: T.func,
        alpha: T.bool,
        removeSeatCallback: T.func,
        maxReservableSeats: T.number,
        rows: T.arrayOf(T.arrayOf(T.shape({
            number: T.oneOfType([
                T.string,
                T.number
            ]).isRequired,
            isReserved: T.bool
        }))).isRequired,
        seatWidth: T.number
    };

    static defaultProps = {
        addSeatCallback: (row, number) => {
            console.log(`Added seat ${number}, row ${row}`);
        },
        removeSeatCallback: (row, number) => {
            console.log(`Removed seat ${number}, row ${row}`);
        },
        seatWidth: 35
    };

    constructor(props) {
        super(props);
        const { rows, seatWidth } = props;
        this.state = {
            selectedSeats: Map(),
            size: 0,
            width: seatWidth * (1 + Math.max.apply(null, rows.map(row => row.length)))
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.selectedSeats !== this.state.selectedSeats;
    }

    selectSeat = (row, number) => {
        const { selectedSeats, size } = this.state;
        const { maxReservableSeats, addSeatCallback, removeSeatCallback } = this.props;
        const seatAlreadySelected = selectedSeats.get(row, Set()).includes(number);

        if (size < maxReservableSeats && !seatAlreadySelected) {
            this.setState({
                selectedSeats: selectedSeats.mergeDeep({[row]: Set([number])}),
                size: size + 1
            }, () => addSeatCallback(row, number));
        } else if (selectedSeats.has(row) && seatAlreadySelected) {
            this.setState({
                selectedSeats: selectedSeats.update(row, seats => seats.delete(number)),
                size: size - 1
            }, () => removeSeatCallback(row, number))
        }
    }

    render() {
        const { width } = this.state;
        return <div style={{ width }}>{ this.renderRows() }</div>;
    };

    renderRows() {
        const { selectedSeats: seats } = this.state;
        const { alpha } = this.props;
        return this.props.rows.map((row, index) => {
            const rowNumber = alpha ?
                String.fromCharCode('A'.charCodeAt(0) + index) :
                (index + 1).toString();
            const isSelected = !seats.get(rowNumber, Set()).isEmpty();
            const props = {
                rowNumber,
                isSelected,
                selectedSeat: null,
                seats: row,
                key: `Row${rowNumber}`,
                selectSeat: this.selectSeat
            };

            return (
                <Row  {...props}>
                    {this.renderSeats(row, rowNumber, isSelected)}
                </Row>
            );
        });
    };

    renderSeats(seats, rowNumber, isRowSelected) {
        const { selectedSeats, size } = this.state;
        const { maxReservableSeats } = this.props;
        return seats.map((seat, index) => {
            if (seat === null) return <Blank key={index}/>;
            const isSelected = isRowSelected && selectedSeats.get(rowNumber).includes(seat.number);
            const props = {
                isSelected,
                isReserved: seat.isReserved,
                isEnabled: size < maxReservableSeats,
                selectSeat: this.selectSeat.bind(this, rowNumber, seat.number),
                seatNumber: seat.number,
                key: index
            };
            return <Seat {...props} />;
        });
    }
}
