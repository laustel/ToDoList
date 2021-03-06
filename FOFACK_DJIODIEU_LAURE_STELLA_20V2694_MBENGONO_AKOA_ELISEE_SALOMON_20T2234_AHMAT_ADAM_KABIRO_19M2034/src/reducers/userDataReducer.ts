import * as types from '../actions/actionTypes';

const initialState = {
  email: '',
};

export default function userDataReducer(state = initialState, action: { type: any; payload: any; }) {
  switch(action.type) {

    case types.CHANGE_USER_DATA:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }

}
