import moment from 'moment'

export default [{
  id: '1',
  description: 'Coffee',
  note: '',
  amount: 195,
  createdAt: 0
},
{
  id: '2',
  description: 'Pizza',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'Burger',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
