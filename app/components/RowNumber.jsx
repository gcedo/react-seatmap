import React, { PropTypes as T } from 'react';
import style from '../style/RowNumber.scss';

export default class RowNumber extends React.Component {

    static propTypes = {
        rowNumber: T.number,
        over: T.bool
    }

    render() {
        const style = { fontWeight: this.props.over ? 700 : 'normal' };
        return (
            <div style={style} className="RowNumber">
                {this.props.rowNumber}
            </div>
        );
    }
}
