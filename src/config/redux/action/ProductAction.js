import axios from 'axios';

export const setDataProduct =(page) => (dispatch) =>{

    axios.get(`http://localhost:4000/v1/product?page=${page}&perPage=4`)
        .then(result =>{
            const responseApi =result.data;

            dispatch({type: 'UPDATE_DATA_PRODUCT',payload : responseApi.data});
            dispatch({type:'UPDATE_PAGE',payload:{
                currenPage : responseApi.current_page,
                totalPage: Math.ceil(responseApi.total_data/responseApi.per_page)
            }})
        })
        .catch(err => {
            console.log(err)
        });

    
}