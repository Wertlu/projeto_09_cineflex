import ButtonBox from "./ButtonBox"

export default function Session({ session, setSessionDay, setSessionHour }) {
    return (
        <div className="sessions">
            <p className="day">{session.weekday} - {session.date}</p>
            <div className="button-box">
                {session.showtimes.map((time) => <ButtonBox setSessionDay={setSessionDay} setSessionHour={setSessionHour} day={session.date} id={time.id} hour={time.name} key={time.id} />)}
            </div>
        </div>
    )
}