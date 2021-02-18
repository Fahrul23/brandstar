import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

function DetailProduct(props) {
    
    const [data,setData] = useState([]);
    
    const {id}  = useParams();

    const history = useHistory();


    let getData =async ()=>{
        try {
            let response = await axios.get(`http://localhost:4000/v1/product/${id}`);
            let responseData = response.data;
            setData(responseData.data);
            console.log('response data :',responseData)
        } catch (e) {
            console.log(e.message)
        }
    }

    let backToProduct = ()=>{
        history.push('/product')
    }

    let onDelete= ()=>{
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this delete',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete(`http://localhost:4000/v1/product/delete/${id}`)
                    .then(res =>{
                        console.log('success delete',res.data);
                        backToProduct()
                    })
                    .catch(e => console.log(e))
                }
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
        });
    }
    
    useEffect(()=>{
        getData();
        console.log(data.name);
    },[id])

    if(!data){
        return(
            <p>Loading ...</p>
        )
    }else{
        return (
            <div>
                <div class="content-body"> 
			        <div class="container-fluid">
                        <div class="page-titles">
					        <ol class="breadcrumb">
						        <li class="breadcrumb-item"><a href="javascript:void(0)">Layout</a></li>
						        <li class="breadcrumb-item active"><a href="javascript:void(0)">Blank</a></li>
					        </ol>
                        </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                                            <div class="tab-content">
                                                <div role="tabpanel" class="tab-pane fade show active" id="first">
                                                    <img class="img-fluid"  src={`http://localhost:4000/${data.image}`} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                                            <div class="product-detail-content">
                                                <div class="new-arrival-content pr">
                                                    <h4>{data.name}</h4>
                                                    <button type="button" onClick={() => onDelete()} class="btn btn-square btn-outline-danger float-right">Delete</button>
                                                    <button type="button" class="btn btn-square btn-outline-primary float-right mr-2">Update</button>
                                                
                                                    <div class="star-rating mb-2">
                                                        <ul class="produtct-detail-tag">
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                <div class="d-table mb-2">
													<p class="price float-left d-block">Rp. {data.price}</p>
                                                </div>
                                                <p>Availability: <span class="item"> In stock <i
                                                            class="fa fa-shopping-basket"></i></span>
                                                </p>
                                                <p>Category: <span class="item">Pot</span> </p>
                                                
                                                <p class="text-content">{data.description}</p>
                                                
                                                <div class="shopping-cart mt-3">
                                                    <a onClick={()=> history.push('/product')} class="btn btn-primary btn-lg" href="#"><i
                                                            class="fa fa-shopping-basket mr-2"></i>Back To Product List</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    	</div>
    </div>
        );
    }
    


}

export default DetailProduct;