import React , {useEffect} from 'react';
import styles from './SingleRecord.module.css'
import fetchSingle from '../../redux/actions/SingleRecord';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';


const SingleRecord = () => {
   
    let param = useParams()
    console.log(param.id);
    const singleRecord = useSelector((state)=>state.c)
    console.log(singleRecord)
     const dispatch = useDispatch()
    
     useEffect(()=>{
        dispatch(fetchSingle(param.id))
     },[])


    return (
        <div className={styles.SingleRecord}>
          <div className="card">
              <div className="card-body d-flex">
              <div className="card-image" style={{maxWidth:"300px"}}>
                  <img src={singleRecord.singleRecord.image} />
              </div>

                <div className="card-details" style={{marginLeft:"35px",marginTop:"60px"}}>
                <h3 className="card-title">Title: {singleRecord.singleRecord.title}</h3>
              <h4 className="card-price">${singleRecord.singleRecord.price}</h4>
              {/* <h4 className="card-price">{singleRecord.singleRecord.rating}</h4> */}
              <p className="card-description">Description: {singleRecord.singleRecord.description}</p>
                </div>
              </div>
          </div>
        </div>
    )
}

export default SingleRecord
