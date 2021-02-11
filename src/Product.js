import React from 'react';
import { Footer,Header,Loading, Sidebar,ProductItem} from './Components';


function Product(props) {



    return (
        <div>
        <div id="main-wrapper">
        <Loading />
        <Header />
        
        <Sidebar />      
        <ProductItem />
        <Footer />
        </div>
    </div>
    );
}

export default Product;