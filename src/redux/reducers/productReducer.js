import { ActionTypes } from "../contants/actionTypes";

const initState = {
    products: [{
        'id': 1,
        'name': 'Practial Sanskrit',
        'description':''
    }]
};

export const productReducer = (state = initState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload};
        default: 
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

// export const removeSelectedProductReducer = (state = {}, {type, payload}) => {
//     switch(type){
//         case ActionTypes.REMOVE_SELECTED_PRODUCT:
//             return { ...state }
//         default:
//             return state;
//     }
// }