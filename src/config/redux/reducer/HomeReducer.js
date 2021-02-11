const initialStateHome = {
    products:[],
}

const HomeReducer = (state = initialStateHome,action) =>{
    
    if(action.type === 'UPDATE_DATA_PRODUCT'){
        return {
            ...state,
            products:action.payload
        }
    }
    return state;
}


export default HomeReducer;