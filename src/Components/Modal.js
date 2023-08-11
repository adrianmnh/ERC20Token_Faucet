import React, { useState } from 'react';
import "../styles/App.css";

const Modal = () => {

	const toggleModal = () => {
		console.log("tottleModal");
		// SetModal(!modal);
	}

	return (

		<>

			<button onClick={toggleModal}
				className="button-modal">
				Open
			</button>

		</>
	);

}

export default Modal;