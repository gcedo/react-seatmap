export const ActionTypes = {
    SELECT_SEAT: 'SELECT_SEAT'
}

export function selectSeat(rowNumber, seatNumber) {
    return {
        type: ActionTypes.SELECT_SEAT,
        rowNumber,
        seatNumber
    };
};
