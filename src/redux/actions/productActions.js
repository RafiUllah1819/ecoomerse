import * as CONSTANST from '../constant/Product_Constants';

export const fetchProduct = () => (dispatch) =>{
    dispatch(productRequest)
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((res)=> dispatch(productSuccess(res)))
    .catch((err)=>dispatch(productFailure(err)))
}

const productRequest = () =>{
    return{
        type: CONSTANST.PRODUCT_REQUEST, 
    }
}

const productSuccess = (res) =>{
    return{
        type: CONSTANST.PRODUCT_SUCCESS,
        payload: res
    }
}
const productFailure = (err) =>{
    return{
        type: CONSTANST.PRODUCT_FAILURE,
        payload:err
    }
}

