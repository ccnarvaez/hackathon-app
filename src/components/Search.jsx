import { db } from '../firebaseConfig';
import React from 'react';
import searcher from '../img/searcher.png'
import { useState } from 'react';
import { useParams } from "react-router-dom";

const Search = () => {

  let [skills, setSkills] = useState([]);
  const [busqueda, setBusqueda]= useState("");
  let { usermail } = useParams();

  React.useEffect(() => {

    const gettingData = async () => {
      try {
        const data = await db.collection('oferta').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setSkills(dataArray);
        // console.log(dataArray)
      } catch (err) {
        console.log(err)
      }

    }
    gettingData();

  }, []);

  //Función para obtener el valor del input
  const handleChange = e =>{
    setBusqueda(e.target.value);
    console.log(e.target.value)
  }

  return (
    <>
      <div className="profileContainer">
        <label className="labelStyle">Buscar</label>
        <div className="bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Ingresa tu búsqueda..."
              className="user-search"
              value={busqueda}
              onChange={handleChange}
            />
            <button className="search-btn">
              <img src={searcher} alt="" className="searcher" />
            </button>
          </div>
        </div>
        <div className="user">
          <ul className="user-list">
            {skills.map(item => (
              <div className="user-container">
                <li className="user-info" id={item.Nombre}>
                  <figure>
                    <div className="user-number">Nombre: {item.Nombre}</div>
                    <div className="user-number">Número: {item.Numero}</div>
                    <a href ={`/userprofile/${item.Email}`}> Ver más...</a>
                    {/* <div className="user-skills">Skills: {item.Skills}</div> */}

                    
                    {/* <button
                      className="seeMoreBtn"
                      onClick={() => window.location.href = 'http://localhost:3000/userprofile/'+usermail}
                    >
                      Ver más...
                    </button> */}
                  </figure>
                </li>
              </div>
            ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Search;

