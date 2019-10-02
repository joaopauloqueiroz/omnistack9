import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import "./index.css"
import api from  "../../services/api"

export default function Dashboard() {
  const [spots, setStpots] = useState([])

  useEffect(()=> {
    async function loadSpots(){
      let user_id = localStorage.getItem('user')
      const response = await api.get('/dashboard', {
        headers: {user_id}
      })
      setStpots(response.data)
      console.log(response.data)

    }
    loadSpots()
  }, []);

  return (
    <>
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
