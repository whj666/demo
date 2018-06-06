import * as actionTypeAll from '../constants/actionTypeAll';

/**
 * 公共
 */
export function render(data){
    return{
        type: actionTypeAll.render,
        data
    }
}