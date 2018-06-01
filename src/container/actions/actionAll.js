import * as ActionTypeAll from '../constants/actionTypeAll';

/**
 * 公共
 */
export function render(data) {
    return {
        type: ActionTypeAll.render,
        data
    }
}
export function setHotInstanceObj(data) {
    return {
        type: ActionTypeAll.GETHOTINSTANCEOBJ,
        data
    }
}

export function setCurrentModule(data) {
    return {
        type: ActionTypeAll.CURRENTMODULE,
        data
    }
}

/**
 * 水库调度
 */


 /**
 * 洪水预报
 */


 /**
 * map
 */
export function updateMap(data) {
    return{
        type:ActionTypeAll.updateMap,
        data
    }
}

export function zoomToFeature(data) {
    return{
        type:ActionTypeAll.zoomToFeature,
        data
    }
}