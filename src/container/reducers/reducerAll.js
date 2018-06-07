import * as actionTypeAll from '../constants/actionTypeAll';

/**
 * 公共
 */
export function common(state={}, action){
    switch(action.type){
        case actionTypeAll.collapsed:
            return Object.assign({}, state, {collapsed: action.data.collapsed})
        default:
            return state
    }
}