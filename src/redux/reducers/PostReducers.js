import * as CONSTANTS from '../constant/constants'

const initialState={
    postItems:[],
    loading: false,
    error:null,
}

const PostReducers=(state=initialState, action)=>{
    switch(action.type){
        case CONSTANTS.FETCH_POSTS_REQUEST:
            return{
                ...state, 
                loading:true,
                error:null,

            }
        case CONSTANTS.FETCH_POSTS_SUCCESS:
            return{
                ...state,
                loading:false,
                postItems:action.payload
            }  
        case CONSTANTS.FETCH_POSTS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }   
        default :
        return state;       
    }
}

export default PostReducers;