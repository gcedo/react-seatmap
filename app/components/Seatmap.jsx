import React, { PropTypes as T } from 'react';
import Row from './Row.jsx';
import Immutable, { Map, Set } from 'immutable';
import Seat from './Seat.jsx';
import Blank from './Blank.jsx';

export default class Seatmap extends React.Component {

    static propTypes = {
        rows: T.array,
        maxReservableSeats: T.number,
        addSeatCallback: T.func,
        removeSeatCallback: T.func
    };

    static defaultProps = {
        addSeatCallback: (row, number) => {
            console.log(`Added seat ${number}, row ${row}`);
        },
        removeSeatCallback: (row, number) => {
            console.log(`Removed seat ${number}, row ${row}`);
        }
    };

    constructor(props) {
        super(props);
        this.state = { selectedSeats: Map(), size: 0 };
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
        return <div>{ this.renderRows() }</div>;
    };

    renderRows() {
        const { selectedSeats: seats } = this.state;
        return this.props.rows.map((row, index) => {
            const rowNumber = index.toString();
            const isSelected = !seats.get(rowNumber, Set()).isEmpty();
            const props = {
                rowNumber,
                isSelected,
                selectedSeat: null,
                seats: row,
                key: `Row${index}`,
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
