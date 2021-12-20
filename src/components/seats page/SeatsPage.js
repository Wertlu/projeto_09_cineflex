import "./seatspage.css";
import Footer from "../footer/Footer";
import Seat from "./Seat";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function SeatsPage({ setChosenSeats,
  setClientName,
  setClientCPF,
  clientName,
  clientCPF }) {

  const [seats, setSeats] = useState(null);
  const [selectedSeatsID, setSelectedSeatsID] = useState([])
  const [selectedSeatsNames, setSelectedSeatsNames] = useState([])
  const { sessionID } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionID}/seats`
    );

    promise.then((response) => {
      setSeats(response.data);
    });
  },

    []);

  return (
    <div className="seats-page">
      <h1>Selecione o(s) assento(s)</h1>
      <div className="seats">
        {seats && seats.seats.map((seat) => <Seat seat={seat} setSelectedSeatsID={setSelectedSeatsID} selectedSeatsID={selectedSeatsID} setSelectedSeatsNames={setSelectedSeatsNames} selectedSeatsNames={selectedSeatsNames} key={seat.id} />)}

      </div>
      <div className="seats-example">
        <div>
          <button className="selected"></button>Selecionado
        </div>
        <div>
          <button className="available"></button>Disponível
        </div>
        <div>
          <button className="occupied"></button>Indisponível
        </div>
      </div>

      <div className="input-box">
        <div className="buyer-name">
          <h3>Nome do comprador:</h3>
          <input onChange={(event) => setClientName(event.target.value)} type="text" placeholder="Digite seu nome..."></input>
        </div>
        <div className="buyer-cpf">
          <h3>CPF do comprador:</h3>
          <input onChange={(event) => setClientCPF(event.target.value)} type="number" placeholder="Digite seu CPF..."></input>
        </div>
      </div>

      <button onClick={() => confirmSeats(selectedSeatsID, selectedSeatsNames, clientName, clientCPF, navigate, setClientName, setClientCPF, setChosenSeats)}>Reservar Assento(s)</button>
      {seats && <Footer title={seats.movie.title}
      img={seats.movie.posterURL}
      key={seats.movie.id}
      weekDay={seats.day.weekday}
      hour={seats.name} />}
    </div>
  );

  function confirmSeats(ids, selectedSeatsNames, clientName, clientCPF, navigate, setClientName, setClientCPF, setChosenSeats) {

    if (clientName === "") {
      alert("Insira seu nome")
      return
    }
  
    if (ids.length === 0) {
      alert("Selecione um assento")
      return
    }
  
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {
      ids,
      clientName,
      clientCPF
    })
    promise.then(() => {
      setChosenSeats(selectedSeatsNames)
      setClientName(clientName)
      setClientCPF(clientCPF)
      navigate("/sucesso")
    })
  }
}