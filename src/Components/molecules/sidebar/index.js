import React from 'react';
import { useHistory } from 'react-router-dom';

function Sidebar(props) {

    const history = useHistory();

    return (
        <>
            <div className="deznav">
            <div className="deznav-scroll">
				<ul className="metismenu" id="menu">
                    <li><a onClick={()=> history.push('/')}  className=" ai-icon"  aria-expanded="false">
							<i className="flaticon-381-networking"></i>
							<span className="nav-text">Dashboard</span>
						</a>
                    </li>
                    <li><a onClick={()=>{history.push('/product')}} className="ai-icon" aria-expanded="false">
							<i className="flaticon-381-internet"></i>
							<span className="nav-text">Product</span>
						</a>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-layer-1"></i>
							<span className="nav-text">Category</span>
						</a>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                        <i className="flaticon-381-notepad"></i>
                        <span className="nav-text">Payments</span>
                    </a>
                </li>
            
                    <li><a href="widget-basic.html" className="ai-icon" aria-expanded="false">
							<i className="flaticon-381-settings-2"></i>
							<span className="nav-text">Setting</span>
						</a>
					</li>
                  
                </ul>
				
			</div>
        </div>
        </>
    );
}

export default Sidebar;