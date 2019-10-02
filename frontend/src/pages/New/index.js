import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg'
import api from '../../services/api'
import './index.css'
export default function New({history}) {
  const [thumbnail, setThumbnail] = useState(null)
  const [company, setCompany] = useState("")
  const [techs, setTechs] = useState("")
  const [price, setPrice] = useState("")

  const preview = useMemo(() => {
    return  thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail])

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('thumbnail', thumbnail)
      data.append('company', company)
      data.append('techs', techs)
      data.append('price', price)
      const user_id = localStorage.getItem('user')

      await api.post('/spots', data, {
        headers: {user_id}
      })
      
      history.push('/dashboard');

    } catch (error) {
      console.log(error)
    }
  }

  return (
  <form onSubmit={handleSubmit}>
    <label
      id="thumbnail" 
      style={{backgroundImage: `url(${preview})`}}
      className={thumbnail ? "has-thumbnail" : ""}
      >
      <input type="file" onChange={e => setThumbnail(e.target.files[0])}/>
      <img src={camera} alt="Select img"/>
    </label>
      <label htmlFor="company">EMPRESSA *</label>
      <input 
        id="company"
        type="text"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />

      <label htmlFor="techs">TECNOLOGIAS * <span>Separadas por virgula</span></label>
      <input 
        id="techs"
        type="text"
        placeholder="Quais technologias usam?"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />

      <label htmlFor="price">VALOR DA DIÀRIA * <span>(Em branco para GRATUITO)</span></label>
      <input 
        id="price"
        type="text"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button type="submit" className="btn" onClick={handleSubmit}>CADASTRAR</button>
    </form>
  );
}
