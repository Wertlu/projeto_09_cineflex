import "./assets/css/reset.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header";
import MainPage from "./components/main page/MainPage";
import MoviePage from "./components/movie/MoviePage";
import SeatsPage from "./components/seats page/SeatsPage";
import SuccessPage from "./components/success page/SuccessPage";

export default function App() {

  const [movieName, setMovieName] = useState("");
  const [sessionDay, setSessionDay] = useState("");
  const [sessionHour, setSessionHour] = useState("");
  const [chosenSeats, setChosenSeats] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientCPF, setClientCPF] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage setMovieName={setMovieName} />} />
        <Route path="/filme/:movieID" element={<MoviePage setSessionDay={setSessionDay}
          setSessionHour={setSessionHour} />} />
        <Route path="/sessao/:sessionID" element={<SeatsPage setChosenSeats={setChosenSeats}
          setClientName={setClientName}
          setClientCPF={setClientCPF}
          clientName={clientName}
          clientCPF={clientCPF} />} />
        <Route path="/sucesso" element={<SuccessPage movieName={movieName}
          sessionDay={sessionDay}
          sessionHour={sessionHour}
          chosenSeats={chosenSeats}
          clientName={clientName}
          clientCPF={clientCPF} />} />
      </Routes>
    </BrowserRouter>
  );
}
