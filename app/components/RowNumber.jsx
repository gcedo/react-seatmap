import React, { PropTypes as T } from 'react';

export default class RowNumber extends React.Component {

    static propTypes = {
        rowNumber: T.number,
        over: T.bool
    }

    render() {
        return (
            <div style={{
                width: 35,
                textAlign: 'center',
                color: '#9E9E9E',
                fontWeight: this.props.over ? 700 : 'normal'
            }}>
                {this.props.rowNumber}
            </div>
        );
    }
}
