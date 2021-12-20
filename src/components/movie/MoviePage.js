import "./moviepage.css";
import Footer from "../footer/Footer";
import Session from "./Session";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

export default function MoviePage({setSessionDay, setSessionHour}) {
  const {movieID} = useParams();
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieID}/showtimes`);
    promise.then((response) => {
      setSessions(response.data)
    })
  }, [])
  
    return (
    <div className="movie-page">
      <h1>Selecione o horário</h1>
      <div className="sessions-list">
        {sessions && sessions.days.map(session => <Session setSessionDay = {setSessionDay} setSessionHour = {setSessionHour} session = {session} key = {session.id} />)}
      </div>
      {sessions && <Footer title = {sessions.title} img = {sessions.posterURL} key = {sessions.id} />}
    </div>
  );
}
