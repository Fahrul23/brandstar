import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeReducer from './../../config/redux/reducer/HomeReducer';
import  axios  from 'axios';

function Product(props) {
    const stateGlobal = useSelector(state => state.HomeReducer)
    
    const dispatch = useDispatch();

    useEffect(() => {


        axios.get('http://localhost:4000/v1/product/')
        .then(result =>{
            const responseAPI = result.data;
            dispatch({type: 'UPDATE_DATA_PRODUCT',payload:responseAPI.data})
        })
        .catch(err =>{
            console.log('error', err);
        })

    }, []);

    return (
        <div>
        <div className="content-body">
        <div className="container-fluid">
            {/* <div className="d-flex align-items-center flex-wrap search-job bg-white rounded py-3 px-md-3 px-0 mb-4">
                <div className="col-lg-3 border-right search-dropdown">
                    <div className="dropdown mb-0 custom-dropdown d-block">
                        <div className="btn d-flex align-items-center rounded-0 svg-btn px-0" data-toggle="dropdown">
                            <div className="text-left ml-3">
                                <span className="d-block fs-14 text-black">Category Product</span>
                            </div>
                                <i className="fa fa-angle-down scale5 ml-auto"></i>
                        </div>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" >Ember</button>
                            <button className="dropdown-item" >Pot</button>
                            <button className="dropdown-item" >Tempat Penyimpanan</button>
                            <button className="dropdown-item" >Media Tanam</button>
                            <button className="dropdown-item" >Tempat Sampah</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 d-md-flex">
                    <input className="form-control input-rounded mr-auto mb-md-0 mb-3" type="text"  placeholder="Search by Title, Company or any jobs keyword..." />						
                    <a href="javascript:void(0);" className="btn btn-primary btn-rounded"><i className="las la-search scale5 mr-3"></i>FIND PRODUCT</a>
                </div>
            </div>
            <div className="d-flex pb-3 mb-4 border-bottom flex-wrap align-items-center">
                <a href="javascript:void(0);" className="btn btn-primary light btn-rounded mr-2 mb-2">Ember</a>
                <a href="javascript:void(0);" className="btn btn-primary light btn-rounded mr-2 mb-2">Pot</a>
                <a href="javascript:void(0);" className="btn btn-primary btn-rounded mr-2 mb-2">Tempat Penyimpanan</a>
                <a href="javascript:void(0);" className="btn btn-primary light btn-rounded mr-2 mb-2">Media Tanam</a>
                <a href="javascript:void(0);" className="btn btn-primary light btn-rounded mr-2 mb-2">Tempat Sampah</a>
                
            </div>
            <div className="d-flex flex-wrap mb-4 align-items-center search-filter">
                <div className="mr-auto mb-2 pr-2">
                    <h6 className="text-black fs-16 font-w600 mb-1">Showing 246 product Results</h6>
                    <span className="fs-14">Based your preferences</span>
                </div>
                <div className="dropdown custom-dropdown mb-0 mr-4 mt-3 mt-sm-0 mb-2">
                    <div className="btn border border-primary text-black btn-rounded" role="button" data-toggle="dropdown" aria-expanded="false">
                        Newest
                        <i className="las la-angle-down scale5 text-primary ml-3"></i>
                    </div>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="javascript:void(0);">Details</a>
                        <a className="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
                    </div>
                </div>
                <a href="javascript:void(0);" className="mr-3 mb-2">
                    <span className="border border-primary rounded-circle d-block sharp-lg">
                                                </span>
                </a>
                <a href="javascript:void(0);" className="mb-2">
                    <span className="bg-primary rounded-circle d-block sharp-lg">
                        
                    </span>
                </a>
            </div>
            <div>
            </div> */}
            <div className="row">
                {
                    stateGlobal.products.map(product=>{
                        return(
                            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="new-arrival-product">
                                            <div class="new-arrivals-img-contnent">
                                                <img class="img-fluid"  src={`http://localhost:4000/${product.image}`} alt="" />
                                            </div>
                                            <div class="new-arrival-content text-center mt-3">
                                                <h4><a href="ecom-product-detail.html">{product.name}</a></h4>
                                                <ul class="star-rating">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star-half-empty"></i></li>
                                                    <li><i class="fa fa-star-half-empty"></i></li>
                                                </ul>
                                                <span class="price">Rp. {product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        )
                    })
                }
                
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <div class="pagination">
                    <button type="button" class="btn btn-rounded btn-outline-primary ">Previews</button>
                        <span class="contact-icon btn-outline-primary ml-2">1</span>
                        <div class="mr-3 pt-1 ml-3 "><h2 class="text-primary">/</h2></div>
                            <span class="contact-icon btn-outline-primary mr-2" >5</span>
                            <button type="button" class="btn btn-rounded btn-outline-primary">Next</button> 
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Product;