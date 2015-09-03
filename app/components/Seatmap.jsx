import React, { PropTypes as T } from 'react';
import Row from './Row.jsx';
import Immutable from 'immutable';
import Seat from './Seat.jsx';
import Blank from './Blank.jsx';

export default class Seatmap extends React.Component {

    static propTypes = {
        rows: T.array
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedSeat: Immutable.Map({
                row: null,
                number: null
            })
        };
    }

    selectSeat = (row, number) => {
        this.setState({
            selectedSeat: this.state.selectedSeat.merge({row, number})
        }, () => console.log(this.state.selectedSeat.toJS()));
    }

    render() {
        return (
            <div>
                {this.renderRows()}
            </div>
        );
    };

    renderRows() {
        const { selectedSeat } = this.state;
        return this.props.rows.map((row, index) => {
            const isSelected = index ===  selectedSeat.get('row');
            const props = {
                isSelected,
                selectedSeat: selectedSeat.toJS(),
                seats: row,
                rowNumber: index,
                key: `Row${index}`,
                selectSeat: this.selectSeat
            }

            return (
                <Row  {...props}>
                    {this.renderSeats(row, index, isSelected)}
                </Row>
            );
        });
    };

    renderSeats(seats, rowNumber, isRowSelected) {
        const selectedSeat = this.state.selectedSeat;
        return seats.map((seat, index) => {
            if (seat === null) return <Blank key={index}/>;
            const props = {
                selectSeat: this.selectSeat.bind(this, rowNumber, seat.number),
                isSelected: isRowSelected && seat.number === selectedSeat.get('number'),
                seatNumber: seat.number,
                key: index
            };
            return <Seat {...props} />;
        });
    }
}
