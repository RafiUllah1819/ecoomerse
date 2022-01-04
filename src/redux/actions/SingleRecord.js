import * as CONSTANTS from '../constant/Product_Constants';

 const fetchSingle = (id) => (dispatch) =>{
  
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=> res.json())
    .then((json)=>dispatch(singleRecord(json)))
    .catch((err)=>dispatch(singleRecordErr(err)))
}

const singleRecord = (id) =>{
    return{
        type: CONSTANTS.FETCH_SINGLE_RECORD,
        payload: id
}
}
const singleRecordErr = () =>{
    return{
        type: CONSTANTS.FETCH_SINGLE_ERROR,
      
}
}

export default fetchSingle

// const Data = () => (dispatch) =>{
// fetch('api')
// .then((res)=>res.json())
// .then((json)=>dispatch(singleData(json)))
// .catch((err)=>dispatch(errData(err)))
// }