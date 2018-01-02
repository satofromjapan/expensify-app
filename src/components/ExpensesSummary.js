import React from 'react'
import { connect } from 'react-redux'
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

export const ExpensesSummary = ({expensesCount, expensesTotal}) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">{
        expensesCount === 0 ? (
          <p>No expenses to view</p>
        ) : (expensesCount === 1 ? (
          <p>Viewing <span>{expensesCount}</span> expense totalling <span>{numeral(expensesTotal/100).format('$0,0.00')}</span></p>
        ) : (<p>Viewing <span>{expensesCount}</span> expenses totalling <span>{numeral(expensesTotal/100).format('$0,0.00')}</span></p>)
        )
      }
      </h1>
      <div className="page-header__actions">
        <Link className="button-layout" to="/create">Add Expense</Link>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
