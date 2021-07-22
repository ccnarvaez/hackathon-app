import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { auth } from '../firebaseConfig';
import logo from '../img/logo.png';
import ever from '../img/ever.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msgerror, setMsgError] = useState(null);
    const style = { color: 'black' };
    let history = useHistory();
   

    const LoginUser = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, pass)
        .then( ()=>{
          localStorage.setItem('isAuth', true);
          history.push(`/userprofile/${email}`); 
        })
        .catch((err) => {
          const { code } = err;
          switch (code) {
            case 'auth/invalid-email':
              setMsgError('Formato de correo invalido');
              break;
            case 'auth/user-not-found':
              setMsgError('Usuario no registrado');
              break;
            default: setMsgError('Error en inicio de sesion');
          }
        });
    };

    return (
      <div className="login-container">
        
        <div className="form-container">
        <img src={logo} className="logo" alt="" />
          <div className="box">
            <Form className="form" >
              <Form.Group controlId="formBasicEmail">
                <h5> Matriz de conocimientos </h5>
                <div>
                  <Form.Label>Correo:</Form.Label>
                </div>
                
                <Form.Control
                  onChange={(e) => { setEmail(e.target.value); }}
                  type="email"
                  placeholder="Ingresa tu correo aquí"
                  className="email"
                  value= {email}
                 
                />
                <Form.Text className="text-muted" />
              </Form.Group>
              
    
              <Form.Group controlId="formBasicPassword">
                <div>
                  <Form.Label>Contraseña:</Form.Label>
                </div>
                <Form.Control
                  onChange={(e) => { setPass(e.target.value); }}
                  type="password"
                  placeholder="**********"
                  className="password"
                />
              </Form.Group>
              <Button
                onClick={(e) => LoginUser(e)}
                variant="primary"
                type="button"
                className="login-btn"
                
                
              >
                Iniciar Sesión
              </Button>
            </Form>
            { msgerror && (
            <div style={style}>
              {' '}
              {msgerror}
              {' '}
            </div>
            ) }
          </div>
        </div>
        <div className="img-container">
              <img src={ever} alt="" />
        </div>
      </div>
    );  
};


export {Login};
  