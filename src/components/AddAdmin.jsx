/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, FormLabel, FormText, FormControl } from 'react-bootstrap';
import { db } from '../firebaseConfig';

export const AddAdmin = () => {
	const [adminEmail, setAdminEmail] = useState("");

	const onSubmitHandle = e=>{
		e.preventDefault();
		return db
		.collection('admins')
		.add({
			Email : adminEmail
		})
		.then(res => console.log('added'))
		.catch(err=>console.log('Error',err))
	}

	return (

		<>
			<h2 className="profile"> Agregar nuevo administrador</h2>
			<Form>
				<FormControl onChange={(e) => setAdminEmail(e.target.value)}
				type="email"
				placeholder="Ingresa un correo aquí"/>
				<Button onClick={(e) => onSubmitHandle(e)}>Agregar</Button>
			</Form>
		</>
	)
}