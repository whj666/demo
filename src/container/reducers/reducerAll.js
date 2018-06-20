import * as actionTypeAll from '../constants/actionTypeAll';

/**
 * 公共
 */
export function common(state={}, action){
    switch(action.type){
        case actionTypeAll.collapsed:
            localStorage.collapsed = Number(action.data.collapsed).toString();
            return Object.assign({}, state, {collapsed: action.data.collapsed});
        case actionTypeAll.getUserPhoto:
            return Object.assign({}, state, {getUserPhoto: action.data.getUserPhoto});
        default:
            return state
    }
}