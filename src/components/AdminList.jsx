import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { Dropdown} from 'react-bootstrap';

export const AdminList = () => {
	const [adminsList, setAdminsList] = useState([]);

	const getAdmins = async () => {
		db.collection('admins')
			.onSnapshot((querySnapShot) => {
				const docs = [];
				querySnapShot.forEach((doc) => {
					docs.push({ ...doc.data(), id: doc.id })
				})
				setAdminsList(docs);
			})
	};
	useEffect(() => {
		getAdmins();
	}, []);

	return (
		<div>
			<h2>Lista de administradores</h2>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Correo</th>
					</tr>
				</thead>
				<tbody>
					{adminsList.map(elem => (
						<tr>
							<td>{elem.Nombre}</td>
							<td>{elem.Email}</td>
						</tr>
					))}
				</tbody>
			</table>

			<div id="profile-btn">
              <Dropdown >
                <Dropdown.Toggle className="login-btn" id="dropdown-basic">
                  Validar 
                </Dropdown.Toggle>
                <Dropdown.Menu>
				  <Dropdown.Item href='/userprofile/correo43@correo.com' > Diana Everis </Dropdown.Item>
				  <Dropdown.Item href='/userprofile/correo55@correo.com' > Josefina Everis </Dropdown.Item>
				  <Dropdown.Item href='/userprofile/correo57@correo.com'> Juan Everis </Dropdown.Item>
				  <Dropdown.Item href='/userprofile/correo24@correo.com'> Doroteo Everis </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>  
		</div>
	)
}