import React, { PropTypes as T } from 'react';
import Seat from './Seat.jsx';
import Blank from './Blank.jsx';
import RowNumber from './RowNumber.jsx';

export default class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = { over: false };
    }

    static propTypes = {
        rowNumber: T.number.isRequired
    }

    handleMouseMove = (over) => {
        this.setState({ over });
    }

    render() {
        const style = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontFamily: 'Product Sans',
            marginBottom: 10
        };
        const { over } = this.state;

        if (over) style.backgroundColor = '#F5F5F5';

        return (
            <div
                onMouseOut={this.handleMouseMove.bind(this, false)}
                onMouseOver={this.handleMouseMove.bind(this, true)}
                style={style}
            >
                <RowNumber rowNumber={this.props.rowNumber} over={over} />
                <Seat seatNumber={'A'} />
                <Seat seatNumber={'B'} />
                <Seat seatNumber={'C'} />
                <Blank />
                <Seat seatNumber={'E'} />
                <Seat seatNumber={'F'} />
                <Seat seatNumber={'G'} />
            </div>
        );
    }
}
