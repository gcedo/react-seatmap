import React, { PropTypes as T } from 'react';
import Row from './Row.jsx';
import Immutable from 'immutable';

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
        const { selectedSeat } = this.state;
        const rows = this.props.rows.map((row, index) => {
            const _selectedSeat = selectedSeat.toJS();
            const props = {
                selectedSeat: _selectedSeat,
                seats: row,
                isSelected: index ===  _selectedSeat.row,
                rowNumber: index,
                key: `Row${index}`,
                selectSeat: this.selectSeat
            }
            return <Row  {...props} />;
        })

        return (
            <div>
                {rows}
            </div>
        );
    };
}
