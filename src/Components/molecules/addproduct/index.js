import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setForm, setImagePreview, postToApi } from './../../../config/redux/action';

function ModalAddProduct(props) {

    const {form,imagePreview} = useSelector(state => state.AddProuctReducer);
    
    const {name,category,description,price} = form;
    
    const dispatch = useDispatch();

    const onImageUpload = (e) =>{
        const file = e.target.files[0];
        dispatch(setForm('image',file));
        dispatch(setImagePreview(URL.createObjectURL(file)))
    }
    
    const submitform = () =>{
        postToApi(form)
    }

    return (
        <div>
            <button data-target="#basicModal" data-toggle="modal" class="btn btn-primary btn-rounded"><i class="las la-search scale5 mr-3"></i>Add New Product</button>
                <div class="modal fade" id="basicModal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add New Product</h5>
                                <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group input-primary">
                                    <label class="ml-1 mb-2">Name</label>
                                    <input type="text" class="form-control" value={name} onChange={(e)=> dispatch(setForm('name',e.target.value))}/>
                                </div>
                            <div class="form-group input-primary">
                                <label class="ml-1 mb-2">Category</label>
                                    <select class="form-control default-select" id="sel1" value={category} onChange={(e) => dispatch(setForm('category',e.target.value))}>
                                        <option>Ember</option>
                                        <option>Pot</option>
                                        <option>Tempat Penyimpanan</option>
                                        <option>Media Tanam</option>
                                        <option>Tempat Sampah</option>
                                    </select> 
                            </div>
                            <div class="form-group input-primary">
                                    <label class="ml-1 mb-2">Price</label>
                                    <input type="text" class="form-control" value={price} onChange={(e)=> dispatch(setForm('price',e.target.value))}/>
                                </div>
                            <div class="form-group input-primary">
                                <div class="custom-file">
                                    <input onChange={(e)=> {onImageUpload(e)}} type="file" class="custom-file-input input-rounded" />
                                    <label class="custom-file-label">Choose file</label>				
                                </div> 
                                {imagePreview && <img className="mt-3" src={imagePreview} width="160" alt=""/>}
                                	
                            </div>
                            <div class="form-group input-primary">
                                <label class="ml-1 mb-2">Description</label>
                                <textarea value={description} onChange={(e) => dispatch(setForm('description',e.target.value))} class="form-control" rows="3" id="comment"></textarea>         
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                            <button onClick={submitform} type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAddProduct;