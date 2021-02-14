import React from 'react';

function Filter(props) {
    return (
        <div>
            <div className="d-flex align-items-center flex-wrap search-job bg-white rounded py-3 px-md-3 px-0 mb-4">
                <div className="col-lg-3 border-right search-dropdown">
                    <div className="dropdown mb-0 custom-dropdown d-block">
                        <div className="btn d-flex align-items-center rounded-0 svg-btn px-0" data-toggle="dropdown">
                            <div className="text-left ml-3">
                                <span className="d-block fs-14 text-black">Category Product</span>
                            </div>
                                <i className="fa fa-angle-down scale5 ml-auto"></i>
                        </div>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" >Ember</button>
                            <button className="dropdown-item" >Pot</button>
                            <button className="dropdown-item" >Tempat Penyimpanan</button>
                            <button className="dropdown-item" >Media Tanam</button>
                            <button className="dropdown-item" >Tempat Sampah</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 d-md-flex">
                    <input className="form-control input-rounded mr-auto mb-md-0 mb-3" type="text"  placeholder="Search by Title, Company or any jobs keyword..." />						
                    <a href="javascript:void(0);" className="btn btn-primary btn-rounded"><i className="las la-search scale5 mr-3"></i>FIND PRODUCT</a>
                </div>
            </div>
            <div className="d-flex pb-3 mb-4 border-bottom flex-wrap align-items-center">
                <a href="javascript:void(0);" className="btn btn-primary light btn-rounded mr-2 mb-2">Ember</a>
                <a href="javascript:void(0);" className="btn btn-primary light btn-rounded mr-2 mb-2">Pot</a>
                <a href="javascript:void(0);" className="btn btn-primary btn-rounded mr-2 mb-2">Tempat Penyimpanan</a>
                <a href="javascript:void(0);" className="btn btn-primary light btn-rounded mr-2 mb-2">Media Tanam</a>
                <a href="javascript:void(0);" className="btn btn-primary light btn-rounded mr-2 mb-2">Tempat Sampah</a>
                
            </div>
            <div className="d-flex flex-wrap mb-4 align-items-center search-filter">
                <div className="mr-auto mb-2 pr-2">
                    <h6 className="text-black fs-16 font-w600 mb-1">Showing 246 product Results</h6>
                    <span className="fs-14">Based your preferences</span>
                </div>
                <div className="mb-0 mr-4 mt-3 mt-sm-0 mb-2">
                    <button data-target="#basicModal" data-toggle="modal" class="btn btn-primary btn-rounded"><i class="las la-search scale5 mr-3"></i>Add New Product</button>
                        <div class="modal fade" id="basicModal">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                          <h5 class="modal-title">Add New Product</h5>
                                          <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                                          </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group input-primary">
                                            <label class="ml-1 mb-2">Name</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                        <div class="form-group input-primary">
                                            <label class="ml-1 mb-2">Category</label>
                                            <select class="form-control default-select" id="sel1">
                                                <option>Ember</option>
                                                <option>Pot</option>
                                                <option>Tempat Penyimpanan</option>
                                                <option>Media Tanam</option>
                                                <option>Tempat Sampah</option>
                                            </select> 
                                        </div>
                                        <div class="form-group input-primary">
                                            <label class="ml-1 mb-2">Price</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                        <div class="form-group input-primary">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input input-rounded" />
                                                <label class="custom-file-label">Choose file</label>
												
                                            </div>   
                                        </div>
                                        <div class="form-group input-primary">
                                            <label class="ml-1 mb-2">Description</label>
                                            <textarea class="form-control" rows="3" id="comment"></textarea>
                                            
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                          <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                          <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="javascript:void(0);" className="mr-3 mb-2">
                    <span className="border border-primary rounded-circle d-block sharp-lg">
                                                </span>
                </a>
                <a href="javascript:void(0);" className="mb-2">
                    <span className="bg-primary rounded-circle d-block sharp-lg">
                        
                    </span>
                </a>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Filter;