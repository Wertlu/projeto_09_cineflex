import { Link } from "react-router-dom"
export default function ButtonBox({ setSessionDay,
    setSessionHour,
    day,
    id,
    hour }) {

    return (
        <Link to={`/sessao/${id}`}>
            <button onClick={() => selectSession(setSessionDay, setSessionHour, day, hour)} className="hour">
                {hour}
            </button>
        </Link>
    )
}

function selectSession(setSessionDay,
    setSessionHour,
    day,
    hour) {
    setSessionDay(day);
    setSessionHour(hour);
}