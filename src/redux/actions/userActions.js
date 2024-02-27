// /redux/actions/userActions.js
import * as actionTypes from './actionTypes'

export const setUser = (user) => {
  return {
    type: actionTypes.SET_USER,
    payload: user,
  }
}
