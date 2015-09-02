import React, { PropTypes as T } from 'react';

export default class Seat extends React.Component {

    static propTypes = {
        seatNumber: T.string,
        color: T.string,
        selectedColor: T.string,
        disabledColor: T.string
    }

    static defaultProps = {
        color: '#4FC3F7',
        overColor: '#03A9F4',
        selectedColor: '#4CAF50',
        selected: false
    };

    handleClick = () => {

    }

    render() {
        const { selected, color, selectedColor } = this.props;
        const backgroundColor = selected ? selectedColor : color;
        return (
            <div
                onClick={this.handleClick}
                style={{
                    backgroundColor,
                    height: 35,
                    width: 35,
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    WebkitBorderTopLeftRadius: 10,
                    WebkitBorderTopRightRadius: 10
                }}
            >
                {this.props.seatNumber}
            </div>
        );
    }
}
