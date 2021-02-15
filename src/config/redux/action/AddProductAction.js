import axios from 'axios';

export const setForm =(formType,formValue)=>{
    return {type:'SET_FORM_DATA',formType,formValue}
}

export const setImagePreview = (payload)=>{
    return {type:'SET_IMAGE_PREVIEW',payload}
}

export const postToApi = (form) =>{
    const data = new FormData();
    data.append('name',form.name);
    data.append('category',form.category);
    data.append('price',form.price);
    data.append('image',form.image);
    data.append('description',form.description);

    axios.post('http://localhost:4000/v1/product/create',data,{
        headers:{
            'content-type' : 'multipart/form-data'
        }
    })
    .then(response =>{
        console.log('success',response)
    })
    .catch(e => {
        console.log(e)
    })
}