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

    selectSeat(row, number) {
        this.setState({
            selectedSeat: this.state.selectedSeat.merge({row, number})
        });
    }

    render() {
        const rows = this.props.rows.map((row, index) => {
            return <Row seats={row} rowNumber={index} key={`Row${index}`} />;
        })

        return (
            <div>
                {rows}
            </div>
        );
    };
}
