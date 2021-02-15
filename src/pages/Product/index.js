import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Filter} from './../../Components';
import {ProductItem} from './../../Components';
import axios from 'axios';
import { setDataProduct } from './../../config/redux/action';

function Product(props) {

    const [counter,setCounter] = useState(1)
    const {products,page} = useSelector(state => state.ProductReducer)
    
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(setDataProduct(counter))     
    }, [counter,dispatch]);

    const next = () =>{
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    } 
    const preview =() =>{
        setCounter(counter <= 1 ? 1 : counter - 1)
        
    }

    return (
        <div>
            <div className="content-body">
                <div className="container-fluid">
                    <Filter/>
                    <div className="row">
                        {
                            products.map(product=>{
                                return(
                                    <ProductItem 
                                    image={`http://localhost:4000/${product.image}`}
                                    name={product.name}
                                    price={product.price}/>  
                                )
                            })
                        }
                        
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="pagination">
                            <button onClick={()=>{preview()}} type="button" class="btn btn-rounded btn-outline-primary ">Previews</button>
                                <span class="contact-icon btn-outline-primary ml-2">{page.currenPage}</span>
                                <div class="mr-3 pt-1 ml-3 "><h2 class="text-primary">/</h2></div>
                                    <span class="contact-icon btn-outline-primary mr-2" >{page.totalPage}</span>
                                    <button onClick={()=>{next()}} type="button" class="btn btn-rounded btn-outline-primary">Next</button> 
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Product;