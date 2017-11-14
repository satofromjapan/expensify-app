import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

//refactor EditExpensePage to be a class based component
export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/');
  }
  onClick = () => {
    this.props.startRemoveExpense({id: this.props.expense.id})
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}>Remove</button>
      </div>
    )
  }
}
// Set up mapDispatchToProps: editExpense and removeExpense
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

const mapStatetoProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStatetoProps, mapDispatchToProps)(EditExpensePage);
