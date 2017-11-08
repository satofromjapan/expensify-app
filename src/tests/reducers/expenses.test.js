import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '100',
      description: 'New Item',
      note: '',
      amount: 7000,
      createdAt: moment()
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
  const note = 'New note'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].note).toBe(note)
})

test('should not edit expense if expense does not exist', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'someid',
    updates: {
      note: 'this should not be added'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
