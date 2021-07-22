/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
const message = () =>{

  return(alert('Su solicitud será validada por el usuario administrador'));
}

const SignIn = () => {


  return (
    
    <div className="mt-5">
      <div className="text-top mt-9">
        <h2 className="profile">Informacion sobre ti</h2>
        <h4 className="username">Completa la siguiente informacion para crear tu perfil.</h4>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
        <form>
          <table className="table-user">
            <label>n°empleado</label>
              <input
                type="n°empleado"
                className="form-control mb-4"
                placeholder="123456"
                />
                <br></br>
              <label>Cargo o stack:</label>
              <input
                type="Cargo o stack:"
                className="form-control mb-2"
                placeholder="ej: Full-stack developer"
                />
                <br></br>
              <label>Años de experiancia:</label>
              <input
                type="Años de experiancia:"
                className="form-control mb-2"
                placeholder="example@correo.com"
                />
                <br></br>
              <label>Skills:</label>
              <input
                type="Skills:"
                className="Selecciona tus habilidades"
                placeholder="ej: Full-stack developer"
                />
                <br></br>
              <label>Otros:</label>
              <input
                type="Otros:"
                className="form-control mb-2"
                placeholder="ej: hobbies, actividades, etc..."
                />
                <br></br>
                
              <button className="login-btn" onClick = {message}>
                Guardar
              </button>
              <br></br>
          </table>
        </form>
        </div>
      </div>
    </div>
   );
}

export default SignIn
