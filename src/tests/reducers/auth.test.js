import authReducer from '../../reducers/auth'

test('should login a user', () => {
  const action = {
    type: 'LOGIN',
    uid: 10
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe(action.uid)
})

test('should logout a user', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({ uid: 'whatever'}, action)
  expect(state).toEqual({})
})
