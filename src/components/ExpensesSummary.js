import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
// Components / Selectors / Action Imports
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({
	displayedExpenses,
	expensesTotal,
	totalExpenses
}) => {
	const expenseWord = displayedExpenses == 1 ? 'expense' : 'expenses';
	const allExpenses =
		displayedExpenses == totalExpenses ? '' : `(out of ${totalExpenses})`;
	const amount = numeral(totalExpenses / 100).format('$0,0.00');
	let heading = (
		<h1 className="page-header__title">
			Viewing <span>{displayedExpenses}</span> {expenseWord} {allExpenses}{' '}
			totalling <span>{amount}</span>
		</h1>
	);
	return (
		<div className="page-header">
			<div className="content-container">
				{heading}
				<div className="page-header__actions">
					<Link className="button-layout" to="/create">
						Add Expense
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return {
		displayedExpenses: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses),
		totalExpenses: state.expenses.length
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
