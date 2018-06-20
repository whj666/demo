import * as actionTypeAll from '../constants/actionTypeAll';

/**
 * 公共
 */
export function collapsed(data){
    return{
        type: actionTypeAll.collapsed,
        data
    }
}

export function getUserPhoto(data){
    return{
        type: actionTypeAll.getUserPhoto,
        data
    }
}