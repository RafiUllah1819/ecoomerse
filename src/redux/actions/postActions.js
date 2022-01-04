// export  const fetchPosts = () => async (dispatch)=> {
//     dispatch({type: "FETCH_POSTS_REQUEST"})
//     try {
//          const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//          const postData= await response.json();
//          dispatch({type: "FETCH_POSTS_SUCCESS", 
//          payload: postData
//         })
  
//     }  
    
//     catch (error) {
//         dispatch({type:"FETCH_POSTS_FAILURE", 
//         payload:error
//     });
        
//     }
// }



import * as CONSTANTS from '../constant/constants';

export  const fetchPosts = () => (dispatch) => {
    dispatch(postRequest)
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>res.json())
    // .then((res)=> dispatch({type: CONSTANTS.FETCH_POSTS_SUCCESS,payload:res}))
    .then((res)=> dispatch(postSuccess(res)))
    .catch((err)=> dispatch(postFailure(err)))
}

const postSuccess = (res) =>{
    return{
        type :CONSTANTS.FETCH_POSTS_SUCCESS,
        payload: res
    }
}

const postRequest = () =>{
    return{
        type: CONSTANTS.FETCH_POSTS_REQUEST,
    }
}

const postFailure = (err) =>{
    return {
        type: CONSTANTS.FETCH_POSTS_FAILURE,
        payload:err
    }
}
