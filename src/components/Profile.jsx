import { db } from '../firebaseConfig';
import React from 'react';
import { Button, Dropdown, InputGroup} from 'react-bootstrap';
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
                <li className="username" > {item.Nombre} </li>
                <div className="username"> Mis habilidades:  
                <li className="skills-profile" > {item.Skills +" "} </li>
                </div>
                <div className="username"> Otros conocimientos: 
                <li className="skills-profile">  {item.Otros+" "} </li>
                </div>
            </ul>
            <div>
              <Button className="login-btn" id="profile-btn" onClick={getSignIn}> Actualizar </Button>
            </div>
            
            <div className="username"> Validaciones </div>
            <div id="profile-btn">
              <Dropdown >
                <Dropdown.Toggle className="login-btn" id="dropdown-basic">
                  Validar
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={userValidate}> {item.Skills +" "} </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div id="validation-user">{usermail}</div>
        </>
      ))}   
    </>
  )
}
  

export default Profile;