/*
 *
 * ReviewProject reducer
 *
 */

import { DEFAULT_ACTION } from './constants';


export const INITIAL_STATE = {};

function reviewProjectReducer( state = INITIAL_STATE, action ) {
  switch ( action.type ) {
    case DEFAULT_ACTION:
      return state;
      
    default:
      return state;
  }
}

export default reviewProjectReducer;
