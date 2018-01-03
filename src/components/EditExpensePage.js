import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import * as actions from '../actions/expenses';
import DeleteModal from './DeleteModal';

export class EditExpensePage extends React.Component {
	state = {
		deleteRequest: false
	};

	requestDelete = () => {
		this.setState(() => ({ deleteRequest: true }));
	};

	closeModal = () => {
		this.setState(() => ({ deleteRequest: false }));
	};

	handleSubmit = expense => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	handleRemove = () => {
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Edit Expense</h1>
					</div>
				</div>
				<div className="content-container">
					<ExpenseForm
						expense={this.props.expense}
						handleSubmit={this.handleSubmit}
					/>
					<button
						onClick={this.requestDelete}
					className="button-layout button--secondary">
						Remove Expense
					</button>
					<DeleteModal
						deleteRequest={this.state.deleteRequest}
						handleRemove={this.handleRemove}
						handleCancel={this.closeModal}
					/>
				</div>
			</div>
		);
	}
}

const mapStatetoProps = (state, props) => {
	return {
		expense: state.expenses.find(
			expense => expense.id === props.match.params.id
		)
	};
};

export default connect(mapStatetoProps, actions)(EditExpensePage);
