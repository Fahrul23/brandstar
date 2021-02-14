const initialStateProduct = {
    products:[],
    page:{
        currenPage: 1,
        totalPage:1
    }
}

const ProductReducer = (state = initialStateProduct,action) =>{
    
    if(action.type === 'UPDATE_DATA_PRODUCT'){
        return {
            ...state,
            products:action.payload
        }
    }
    if(action.type === 'UPDATE_PAGE'){
        return{
            ...state,
            page: action.payload
        }
    }
    return state;
}


export default ProductReducer;