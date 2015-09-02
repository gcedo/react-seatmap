import React from 'react';
import Row from './Row.jsx';

export default class Seatmap extends React.Component {

    render() {
        return (
            <div>
                <Row rowNumber={1} />
                <Row rowNumber={2} />
                <Row rowNumber={3} />
            </div>
        );
    };
}
