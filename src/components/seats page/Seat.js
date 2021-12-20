export default function Seat({
  seat,
  setSelectedSeatsID,
  selectedSeatsID,
  selectedSeatsNames,
  setSelectedSeatsNames
}) {
  if (selectedSeatsID.includes(seat.id)) {
    return (
      <button onClick={() => selectSeat()} className="selected">
        <span>{seat.name}</span>
      </button>
    );
  }
  return (
    <button
      onClick={() =>
        seat.isAvailable
          ? selectSeat()
          : alert("Esse assento não está disponível")
      }
      className={seat.isAvailable ? "available" : "occupied"}
    >
      <span>{seat.name}</span>
    </button>
  );

  function selectSeat() {
  
    if (selectedSeatsID.includes(seat.id)) {
      setSelectedSeatsID(selectedSeatsID.filter((id) => id !== seat.id));
      setSelectedSeatsNames(selectedSeatsNames.filter((name) => name !== seat.name));
    } else {
      setSelectedSeatsID([...selectedSeatsID, seat.id]);
      setSelectedSeatsNames([...selectedSeatsNames, seat.name]);
    }
  
    console.log(seat);
    console.log(selectedSeatsID);
  }
}
