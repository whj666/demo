import * as ActionTypeAll from '../constants/actionTypeAll';

/**
 * 公共
 */
export function common (state={}, action) {
    switch (action.type) {
        case ActionTypeAll.render:
            return Object.assign({}, state, {render:action.data})
        case ActionTypeAll.GETHOTINSTANCEOBJ:
            return Object.assign({}, state, {gethoTistSistObjo:action.data})
        case ActionTypeAll.CURRENTMODULE:
            return Object.assign({}, state, {getModuleId: action.data})
        default:
            return state
    }
}

/**
 * 水库调度
 */
export function dispatch (state={}, action) {
    switch (action.type) {
        case ActionTypeAll.xxx:
            return action.data
        default:
            return state
    }
}

 /**
 * 洪水预报
 */
export function prediction (state={}, action) {
    switch (action.type) {
        case ActionTypeAll.xxx:
            return action.data
        default:
            return state
    }
}

 /**
 * map
 */
export function map (state={}, action) {
    switch (action.type) {
        case ActionTypeAll.updateMap:
            return action.data;
        case ActionTypeAll.zoomToFeature:
            return Object.assign({}, state, {zoomToFeature:action.data});
        default:
            return state
    }
}