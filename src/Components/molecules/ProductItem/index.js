import React from 'react';

function ProductItem(props) {
    return (
             <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="new-arrival-product">
                            <div class="new-arrivals-img-contnent">
                                <img class="img-fluid"  src={props.image} alt="ProductItem" />
                            </div>
                            <div class="new-arrival-content text-center mt-3">
                                <h4><a href="ecom-product-detail.html">{props.name}</a></h4>
                                <ul class="star-rating">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star-half-empty"></i></li>
                                    <li><i class="fa fa-star-half-empty"></i></li>
                                </ul>
                                <span class="price">Rp. {props.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        
    );
}

export default ProductItem;     