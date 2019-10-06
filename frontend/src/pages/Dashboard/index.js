import React, {useState, useEffect, useMemo} from 'react';
import { Link } from "react-router-dom"
import "./index.css"
import socketio from 'socket.io-client';
import api from  "../../services/api"

export default function Dashboard() {
  const [spots, setStpots] = useState([])
  const [request, setRequest] = useState([])

  const user_id = localStorage.getItem('user');

  const socket = useMemo(() => socketio('http://localhost:3500', {
    query: { user_id}
  }), [user_id]);

useEffect(() => {
  socket.on('booking_request', data => {
    setRequest([...request, data])
  })
}, [request, socket])

  useEffect(()=> {
    async function loadSpots(){
      let user_id = localStorage.getItem('user')
      const response = await api.get('/dashboard', {
        headers: {user_id}
      })
      setStpots(response.data)
    }
    loadSpots()
  }, []);

  async function handleAccept(id){
    await api.post(`/bookings/${id}/approvals`)
    setRequest(request.filter(req => req._id !== id))
  }

  async function handleReject(id){
    await api.post(`/bookings/${id}/rejections`)
    setRequest(request.filter(req => req._id !== id))
  }

  return (
    <>

    <ul className={"notifications"}>
      {request.map(request => 
        (<li key={request._id}>
          <p><strong>{request.user.email} </strong> 
          está solicitando uma reserva em <strong>
          {request.spot.company} </strong>
          para a data: <strong>{request.date}:</strong></p>
          <button onClick={() => handleAccept(request._id)} className="accept">ACEITAR</button>
          <button onClick={() => handleReject(request._id)} className="reject">REJEITAR</button>
        </li>)
      )}
    </ul>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{backgroundImage: `url(${spot.thumbnail_url})`}} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia`: "GRATUITO"}</span>
          </li>
        ))}
      </ul>
      <Link to={"/new"}><button className={"btn"}>CADASTRAR NOVO SPOT</button></Link>
    </>
  );
}
