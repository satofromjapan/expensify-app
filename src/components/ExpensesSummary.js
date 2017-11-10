import React from 'react'
import { connect } from 'react-redux'
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpensesSummary = ({expensesCount, expensesTotal}) => (
  <div>
    <h1>{
      expensesCount === 0 ? (
        <p>No expenses to view</p>
      ) : (expensesCount === 1 ? (
        <p>Viewing {expensesCount} expense totalling {numeral(expensesTotal/100).format('$0,0.00')}</p>
      ) : (<p>Viewing {expensesCount} expenses totalling {numeral(expensesTotal/100).format('$0,0.00')}</p>)
      )
    }
    </h1>
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
