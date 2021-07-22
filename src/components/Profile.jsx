import { db } from '../firebaseConfig';
import React from 'react';
import { Button, Dropdown} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import SignIn from './SignIn';
import ReactDOM from 'react-dom';

const getSignIn = () =>{
  return (
    ReactDOM.render (
    <SignIn />, document.getElementById('profile-update'))
  )
}

const ValidationComp = () => {
  
  return(
    <div > Sus skills han sido validadas </div>
  )
}

const userValidate = () => {
  return(
    ReactDOM.render (
      <ValidationComp />, document.getElementById('validation-user'))
  )
}

const Profile = () => {

  let { usermail } = useParams();
  let [skills, setSkills] = React.useState([]); 
  React.useEffect(() => {
   
    const gettingData = async () =>{
     try{
        const data = await db.collection('oferta').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        const username = dataArray.filter((doc)=> doc.Email === usermail)
        setSkills(username);
     }catch(err){
        console.log(err)
     }
      
    } 
    gettingData();
      
  }, []);     
  
  return(
  <>
    <h2 className="profile"> Mi Perfil </h2>
      {skills.map(item =>(
        <>
            <ul key = {item.id}>
              <div className="username"> Nombre del usuario
                <li className="skills-profile" > {item.Nombre} </li>
                <small className="skills-profile"> Programador full stack </small>
              </div>
                <div className="username"> Numero de empleado: 
                  <li className="skills-profile" >  {item.Numero} </li>
                </div>
                <div className="username"> Mis habilidades:  
                <li className="skills-profile" > {item.Skills +" "} </li>
                </div>
                <div className="username"> Mantener tu perfil actualizado es una oportunidad de crecimiento
                <h6 className="skills-profile"> Haz click en actualizar para agregar nuevas habilidades a tu perfil </h6> 
                </div>   
            </ul>
            <div>
              <Button className="login-btn" id="profile-btn" onClick={getSignIn}> Actualizar </Button>
            </div>
            
            
        </>
      ))}   
    </>
  )
}
  

export default Profile;