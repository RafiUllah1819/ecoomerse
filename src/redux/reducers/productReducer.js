import * as CONSTANTS from '../constant/Product_Constants';

const initialState = {
    productItem : [],
    loading:false,
    error : null,   
}

const productReducer = (state = initialState, actions) =>{
    switch(actions.type){
        case CONSTANTS.PRODUCT_REQUEST:
            return{
                ...state,
                loading: true,
                error:null
            }
        case CONSTANTS.PRODUCT_SUCCESS:
            return{
                ...state,
                productItem:actions.payload,
                loading:false,
            }  
        case CONSTANTS.PRODUCT_FAILURE:
            return{
                ...state,
                error:actions.payload,
                loading: false
            } 
        default: return state;         
    }
}
export default productReducer;