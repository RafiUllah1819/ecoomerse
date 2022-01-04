import React ,{useEffect} from 'react'
import {fetchProduct} from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import style from './product.module.css';
import { Link } from 'react-router-dom';


const Product = () => {

    const dispatch = useDispatch()
    const postProduct = useSelector((state)=>state.b);
    console.log("postProduct data"+postProduct)

    useEffect(()=>{
        dispatch(fetchProduct())
    },[]);
    const renderPost = () => {
        if (postProduct.loading) {
          return <h2>Loading...</h2>;
        } else if (postProduct.loading === false) {
          return (
            <>
            
              {postProduct.error === null ? (
               postProduct.productItem.map((product) => {
                  return (
                    <div className={style.Card}>
                      <div className="card" style={{ margin:"20px"}}>
                          <div className={style.Card_image}><img src={product.image}/></div>
                        <div className="card-body" >
                          <h5 className={`card-title ${style.CardTitle}`}>Product Title: {product.title}</h5>
                          <h4 className={style.AddtoCard}>

                          <span className={`card-title ${style.CardPrice}`}>$ {product.price}</span>
                          <span><button className={`btn ${style.CartButton}`}>Add to cart</button></span>
                          </h4>
                          {/* <p className="card-detail"> Category: {product.category}</p> */}
                         
                            <Link
                            className={`btn  ${style.Button}`}
                            to={`singleRecord/${product.id}`}
                            // to={{
                            //   pathname:`singleRecord/${product.id}`
                            // }}
                            >
                            Details
                            </Link>
                    
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div >{postProduct.error}</div>
              )}
            </>
          );
        }
      };
    
      return <div className={style.Card_display}>{renderPost()}</div>;
    }
    

    // const fetchAllProduct = () =>{
    //     if(postProduct.loading === true){
    //         return <h2>...loading</h2>
    //     }else if(postProduct.loading=== false ){
    //         return (
    //             <div>
    //                 {postProduct === null ? (
    //                     postProduct.productItem.map((item)=>{
    //                         return(
    //                           <div> 
    //                               {item.title}
    //                           </div>  
    //                         )
    //                     })
    //                 ): (
    //                      <div>{postProduct.error}</div>
    //                 )}
    //             </div>
    //         )
    //     }
    // }


export default Product
