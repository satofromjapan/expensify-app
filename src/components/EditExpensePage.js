import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

//refactor EditExpensePage to be a class based component
export class EditExpensePage extends React.Component {
	onSubmit = expense => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};
	onClick = () => {
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
					<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
					<button
						onClick={this.onClick}
     className="button-layout button--secondary">
						Remove Expense
					</button>
				</div>
			</div>
		);
	}
}
// Set up mapDispatchToProps: editExpense and removeExpense
const mapDispatchToProps = (dispatch, props) => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

const mapStatetoProps = (state, props) => {
	return {
		expense: state.expenses.find(
			expense => expense.id === props.match.params.id
		)
	};
};

export default connect(mapStatetoProps, mapDispatchToProps)(EditExpensePage);
