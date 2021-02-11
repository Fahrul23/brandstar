const initialState = {
    name: 'fahrul'
}


const GlobalReducer = (state= initialState,action)=>{
    
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Hundoro'
        }
    }
    return state
}

export default GlobalReducer;