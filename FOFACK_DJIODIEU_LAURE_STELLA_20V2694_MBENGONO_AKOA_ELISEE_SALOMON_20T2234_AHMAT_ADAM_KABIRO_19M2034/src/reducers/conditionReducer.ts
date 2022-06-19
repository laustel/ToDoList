import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
}

export default function conditionReducer(state = initialState, action: { type: any; payload: any; }) {
  switch(action.type) {

    case types.CHANGE_CONDITION:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }

}
