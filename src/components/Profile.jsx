import { db } from '../firebaseConfig';
import React from 'react';
import { Button } from 'react-bootstrap';
// import Login from '../views/Login';


{/* <div className="order-list">
    <h1>PEDIDOS</h1>
    <hr className="line" />
    { cart.map((data, key) => (
      <div key={key}>
        <CartItem
          name={data.name}
          price={numberWithCommas(data.price)}
          id={data.id}
          remove={fxdelete}
        />
      </div>
    ))}
    <div>
      <hr />
      <h2>
        TOTAL: $
        {numberWithCommas(total)}
      </h2>
    </div>
  </div> */}



const Profile = () => {
    
  let [skills, setSkills] = React.useState([]); 
  React.useEffect(() => {
   
    const gettingData = async () =>{
     try{
        const data = await db.collection('oferta').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        const username = dataArray.filter((doc)=> doc.Email === 'correo53@correo.com')
        setSkills(username);
     }catch(err){
        console.log(err)
     }
      
    } 
    gettingData();
      
  }, []);     
  
      return(
          <>
              <div> 
                <h1> Perfil de usuario </h1>
                
                  {skills.map(item =>(
                <>
                    <ul>
                        <li className="list-group-item" key = {item.id}> {item.Nombre} </li>
                        <li className="list-group-item" key = {item.id}> Habilidades: {item.Skills} </li>
                        <li className="list-group-item" key = {item.id}> Otros: {item.Otros} </li>
                    </ul>
                    <Button className="login-btn" id="profile-btn"> Actualizar </Button>
                    <Button className="login-btn" id="profile-btn"> Validar  </Button>
                </>
                  ))
                  }
                
              </div>
              
              
          </>
      )
  }
  

export default Profile;