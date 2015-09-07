# react-seatmap
A React component to display a minimal, yet functional seatmap.

## Usage
The `Seatmap` component accepts the following four props:
### `rows: PropTypes.arrayOf(RowType)`
The array containing the data to build the seatmap. 
`RowType` is defined as `PropTypes.arrayOf(SeatType)`, and `SeatType` is
```
PropTypes.shape({
  number: PropTypes.string.isRequired,
  isReserved: PropTypes.bool
});
```
where 
- `number` is the seat number; 
- `isReserved` tells whether the seat is already reserved or not (you can leave this empty when the seat is free)

### `maxReservableSeats: PropTypes.number`
The maximum number of seats that can be selected.
### `addSeatCallback: PropTypes.func(row, number)`
The callback executed when a seat is added
- `row`, the row number
- `seat`, the seat number

### `removeSeatCallback: PropTypes.func(row, number)`
The callback executed when a seat is removed
- `row`, the row number
- `seat`, the seat number
