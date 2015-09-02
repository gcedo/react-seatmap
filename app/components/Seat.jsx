import React, { PropTypes as T } from 'react';
import style from '../style/Seat.scss';
import cx from 'classnames';

export default class Seat extends React.Component {

    static propTypes = {
        selected: T.bool
    };

    static defaultProps = {
        selected: false
    };

    handleClick = () => {
    };

    render() {
        const { selected } = this.props;
        const className = cx('Seat',
            { 'Seat--selected': selected },
            { 'Seat--enabled': !selected });
        return (
            <div className={className} onClick={this.handleClick}>
                {this.props.seatNumber}
            </div>
        );
    };
}
