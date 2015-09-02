import { ActionTypes } from '../actions/Actions.js';

const initialState = {
    rowNumber: null,
    seatNumber; null
};

function seats(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.SELECT_SEAT:
        const newState = {
            rowNumber: action.rowNumber,
            seatNumber: action.seatNumber
        }
        return {...state, ...newState};
    default:
        return state;
    }
}

export default seats;
