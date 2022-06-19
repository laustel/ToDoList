import * as types from '../actions/actionTypes';

export default function visibilityFilterReducer(state = 'SHOW_ALL', action: { type: any; filter: any; }) {
  switch(action.type) {

    case types.SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }

}


