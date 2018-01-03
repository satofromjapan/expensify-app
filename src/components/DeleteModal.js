import React from 'react';
import Modal from 'react-modal';

const DeleteModal = ({ deleteRequest, handleRemove, handleCancel }) => (
	<Modal
		isOpen={deleteRequest}
		contentLable="Remove Expense"
		onRequestClose={handleCancel}
		closeTimeoutMS={300}
		className="delete-modal">
		<h3>Remove this expense?</h3>
		<button
			onClick={handleRemove}
			className="button-layout delete-modal__button">
			Remove
		</button>
		<button onClick={handleCancel} className="button-layout button--secondary">
			Cancel
		</button>
	</Modal>
);

export default DeleteModal;
