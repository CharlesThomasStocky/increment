import { incre } from '../actions/incActions.js';
//import { combineReducers } from 'redux';

const initialState = {
  num: 0
}

export const incre = ()=> {
  return((state = initialState, action) =>{
    switch(action.type){
      case 'INCRE': 
        return Object.assign({}, state.num++)
      default:
        return state; 
    
    }
  })
}


