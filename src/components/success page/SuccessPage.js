import "./successpage.css";
import { Link } from "react-router-dom";
export default function SuccessPage({
  movieName,
  sessionDay,
  sessionHour,
  chosenSeats,
  clientName,
  clientCPF,
}) {
  return (
    <div className="success-page">
      <h1>
        Pedido feito com sucesso!
      </h1>
      <div className="infos">
        <div className="session-info">
          <h2>Filme e sessão</h2>
          <p>{movieName}</p>
          <p>{`${sessionDay} ${sessionHour}`}</p>
        </div>
        <div className="ticket-info">
          <h2>Ingressos</h2>
          {chosenSeats.map((seat, index) => (
            <p key = {index}>Assento {seat}</p>
          ))}
        </div>
        <div className="buyer-info">
          <h2>Comprador</h2>
          <p>Nome: {clientName}</p>
          <p>CPF: {clientCPF}</p>
        </div>
      </div>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}
