import React, { PropTypes as T } from 'react';
import style from '../style/Seat.scss';
import cx from 'classnames';

export default class Seat extends React.Component {

    static propTypes = {
        isSelected: T.bool,
        seatNumber: T.string.isRequired,
        selectSeat: T.func.isRequired
    };

    static defaultProps = {
        isSelected: false
    };

    render() {
        const { isSelected } = this.props;
        const className = cx('Seat',
            { 'Seat--selected': isSelected },
            { 'Seat--enabled': !isSelected }
        );
        return (
            <div className={className} onClick={this.props.selectSeat}>
                {this.props.seatNumber}
            </div>
        );
    };
}
