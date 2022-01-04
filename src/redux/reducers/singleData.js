import * as CONSTANTS from '../constant/Product_Constants'

const initialState = {
    singleRecord : [],
}

const SingleData = (state= initialState, action) =>{

    switch(action.type){
        case CONSTANTS.FETCH_SINGLE_RECORD:
            return{
                ...state,
                singleRecord: action.payload
            }
            default: return state
    }
}

export default SingleData;