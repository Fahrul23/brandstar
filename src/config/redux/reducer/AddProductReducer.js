const initialState = {
    form:{
        name:'',
        category:'',
        price:'',
        image:'',
        description:''
    },
    imagePreview: null
}

const AddProuctReducer = (state= initialState,action) =>{
    if(action.type ==='SET_FORM_DATA'){
        return{
            ...state,
            form:{
                ...state.form,
                [action.formType] : action.formValue
            }
        }
    }
    if(action.type === 'SET_IMAGE_PREVIEW'){
        return{
            ...state,
            imagePreview : action.payload            
        }
    }

    return state;
}

export default AddProuctReducer;

