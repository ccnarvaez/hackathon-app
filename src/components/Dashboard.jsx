
import { db } from '../firebaseConfig';
import React from 'react';

const Dashboard = () => {
    
  let [skills, setSkills] = React.useState([]); 
  React.useEffect(() => {
  
    const gettingData = async () =>{
     try{
        const data = await db.collection('oferta').get()
        const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        console.log(dataArray);
        setSkills(dataArray);
     }catch(err){
        console.log(err)
     }
      
    } 
    gettingData();
      
  }, []);     
  
      return(
          <>
              <div> 
                <h1> Dashboard! </h1>
                <ul>
                  {skills.map(item =>(
                    <li className="list-group-item" key = {item.id}> {item.Skills} </li>
                  ))
                  }
                </ul>
              </div>
              
              
          </>
      )
  }

export default Dashboard;
