import React, { PropTypes as T } from 'react';
import cx from 'classnames';

export default class Seat extends React.Component {

    static propTypes = {
        isSelected: T.bool,
        isReserved: T.bool,
        seatNumber: T.oneOfType([
            T.string,
            T.number
        ]).isRequired,
        selectSeat: T.func.isRequired
    };

    static defaultProps = {
        isSelected: false
    };

    handleClick = () => {
        !this.props.isReserved && this.props.selectSeat();
    }

    render() {
        const { isSelected, isEnabled, isReserved } = this.props;
        const className = cx('Seat',
            { 'Seat--selected': isSelected },
            { 'Seat--enabled': !isSelected && isEnabled && !isReserved},
            { 'Seat--reserved': isReserved}
        );
        return (
            <div className={className} onClick={this.handleClick}>
                <span className="SeatNumber">{this.props.seatNumber}</span>
            </div>
        );
    };
}
