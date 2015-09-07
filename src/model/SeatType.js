import { PropTypes as T } from 'react';

export default T.shape({
    number: T.oneOfType([
        T.string,
        T.number
    ]).isRequired,
    isReserved: T.bool
});
