import * as actionTypeAll from '../constants/actionTypeAll';

/**
 * 公共
 */
export function common(state={}, action){
    switch(action.type){
        case actionTypeAll.render:
            return Object.assign({}, state, {render:action.data})
        default:
            return state
    }
}