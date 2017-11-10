import React from 'react'
import { shallow } from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'



test('should render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={235890798734}/>)
  expect(wrapper).toMatchSnapshot()
})
