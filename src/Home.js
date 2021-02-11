import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Home(props) {

    const [products,setProducts] = useState([]);
        
    let getProducts = async () => {
        try {
        let response = await Axios.get('http://localhost:4000/v1/product/');
        const responseApi= response.data;
        setProducts(responseApi.data);
        } catch (e) {
        console.log(e.message);
        }
    };

    let filterProduct = ()=>{
        
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
        <div>        
            <div id="preloader">
                <div className="sk-three-bounce">
                    <div className="sk-child sk-bounce1"></div>
                    <div className="sk-child sk-bounce2"></div>
                    <div className="sk-child sk-bounce3"></div>
                </div>
            </div>
        </div>
        <div id="main-wrapper">

      
        <div className="nav-header">
            <a href="index.html" className="brand-logo">
							<img className="logo-abbr" src="assets/images/logo_brandstart.jpeg" alt="" />
						                <img className="logo-compact" src="assets/images/text.png" alt=""/>
                <img className="brand-title" src="assets/images/text.png" alt=""/>
				
            </a>

            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
            </div>
        </div>
       
        
		<div className="chatbox">
			<div className="chatbox-close"></div>
			<div className="custom-tab-1">
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<a className="nav-link" data-toggle="tab" href="#notes">Notes</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" data-toggle="tab" href="#alerts">Alerts</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" data-toggle="tab" href="#chat">Chat</a>
					</li>
				</ul>
				<div className="tab-content">
					<div className="tab-pane fade active show" id="chat" role="tabpanel">
						<div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
							<div className="card-header chat-list-header text-center">
								<div>
									<h6 className="mb-1">Chat List</h6>
									<p className="mb-0">Show All</p>
								</div>
							</div>
							<div className="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
								<ul className="contacts">
									<li className="name-first-letter">A</li>
									<li className="active dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon"></span>
											</div>
											<div className="user_info">
												<span>Archie Parker</span>
												<p>Kalid is online</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/2.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon offline"></span>
											</div>
											<div className="user_info">
												<span>Alfie Mason</span>
												<p>Taherah left 7 mins ago</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/3.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon"></span>
											</div>
											<div className="user_info">
												<span>AharlieKane</span>
												<p>Sami is online</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/4.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon offline"></span>
											</div>
											<div className="user_info">
												<span>Athan Jacoby</span>
												<p>Nargis left 30 mins ago</p>
											</div>
										</div>
									</li>
									<li className="name-first-letter">B</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/5.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon offline"></span>
											</div>
											<div className="user_info">
												<span>Bashid Samim</span>
												<p>Rashid left 50 mins ago</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon"></span>
											</div>
											<div className="user_info">
												<span>Breddie Ronan</span>
												<p>Kalid is online</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/2.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon offline"></span>
											</div>
											<div className="user_info">
												<span>Ceorge Carson</span>
												<p>Taherah left 7 mins ago</p>
											</div>
										</div>
									</li>
									<li className="name-first-letter">D</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/3.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon"></span>
											</div>
											<div className="user_info">
												<span>Darry Parker</span>
												<p>Sami is online</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/4.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon offline"></span>
											</div>
											<div className="user_info">
												<span>Denry Hunter</span>
												<p>Nargis left 30 mins ago</p>
											</div>
										</div>
									</li>
									<li className="name-first-letter">J</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/5.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon offline"></span>
											</div>
											<div className="user_info">
												<span>Jack Ronan</span>
												<p>Rashid left 50 mins ago</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon"></span>
											</div>
											<div className="user_info">
												<span>Jacob Tucker</span>
												<p>Kalid is online</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/2.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon offline"></span>
											</div>
											<div className="user_info">
												<span>James Logan</span>
												<p>Taherah left 7 mins ago</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/3.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon"></span>
											</div>
											<div className="user_info">
												<span>Joshua Weston</span>
												<p>Sami is online</p>
											</div>
										</div>
									</li>
									<li className="name-first-letter">O</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/4.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon offline"></span>
											</div>
											<div className="user_info">
												<span>Oliver Acker</span>
												<p>Nargis left 30 mins ago</p>
											</div>
										</div>
									</li>
									<li className="dz-chat-user">
										<div className="d-flex bd-highlight">
											<div className="img_cont">
												<img  src="assets/images/avatar/5.jpg" className="rounded-circle user_img" alt=""/>
												<span className="online_icon offline"></span>
											</div>
											<div className="user_info">
												<span>Oscar Weston</span>
												<p>Rashid left 50 mins ago</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="card chat dz-chat-history-box d-none">
							<div className="card-header chat-list-header text-center">
								<a href="#" className="dz-chat-history-back">
								</a>
								<div>
									<h6 className="mb-1">Chat with Khelesh</h6>
									<p className="mb-0 text-success">Online</p>
								</div>							
								<div className="dropdown">
									<a href="#" data-toggle="dropdown" ></a>
									<ul className="dropdown-menu dropdown-menu-right">
										<li className="dropdown-item"><i className="fa fa-user-circle text-primary mr-2"></i> View profile</li>
										<li className="dropdown-item"><i className="fa fa-users text-primary mr-2"></i> Add to close friends</li>
										<li className="dropdown-item"><i className="fa fa-plus text-primary mr-2"></i> Add to group</li>
										<li className="dropdown-item"><i className="fa fa-ban text-primary mr-2"></i> Block</li>
									</ul>
								</div>
							</div>
							<div className="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
								<div className="d-flex justify-content-start mb-4">
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
									<div className="msg_cotainer">
										Hi, how are you samim?
										<span className="msg_time">8:40 AM, Today</span>
									</div>
								</div>
								<div className="d-flex justify-content-end mb-4">
									<div className="msg_cotainer_send">
										Hi Khalid i am good tnx how about you?
										<span className="msg_time_send">8:55 AM, Today</span>
									</div>
									<div className="img_cont_msg">
								<img  src="assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div className="d-flex justify-content-start mb-4">
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
									<div className="msg_cotainer">
										I am good too, thank you for your chat template
										<span className="msg_time">9:00 AM, Today</span>
									</div>
								</div>
								<div className="d-flex justify-content-end mb-4">
									<div className="msg_cotainer_send">
										You are welcome
										<span className="msg_time_send">9:05 AM, Today</span>
									</div>
									<div className="img_cont_msg">
								<img  src="assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div className="d-flex justify-content-start mb-4">
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
									<div className="msg_cotainer">
										I am looking for your next templates
										<span className="msg_time">9:07 AM, Today</span>
									</div>
								</div>
								<div className="d-flex justify-content-end mb-4">
									<div className="msg_cotainer_send">
										Ok, thank you have a good day
										<span className="msg_time_send">9:10 AM, Today</span>
									</div>
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div className="d-flex justify-content-start mb-4">
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
									<div className="msg_cotainer">
										Bye, see you
										<span className="msg_time">9:12 AM, Today</span>
									</div>
								</div>
								<div className="d-flex justify-content-start mb-4">
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
									<div className="msg_cotainer">
										Hi, how are you samim?
										<span className="msg_time">8:40 AM, Today</span>
									</div>
								</div>
								<div className="d-flex justify-content-end mb-4">
									<div className="msg_cotainer_send">
										Hi Khalid i am good tnx how about you?
										<span className="msg_time_send">8:55 AM, Today</span>
									</div>
									<div className="img_cont_msg">
								<img  src="assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div className="d-flex justify-content-start mb-4">
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
									<div className="msg_cotainer">
										I am good too, thank you for your chat template
										<span className="msg_time">9:00 AM, Today</span>
									</div>
								</div>
								<div className="d-flex justify-content-end mb-4">
									<div className="msg_cotainer_send">
										You are welcome
										<span className="msg_time_send">9:05 AM, Today</span>
									</div>
									<div className="img_cont_msg">
								<img  src="assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div className="d-flex justify-content-start mb-4">
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
									<div className="msg_cotainer">
										I am looking for your next templates
										<span className="msg_time">9:07 AM, Today</span>
									</div>
								</div>
								<div className="d-flex justify-content-end mb-4">
									<div className="msg_cotainer_send">
										Ok, thank you have a good day
										<span className="msg_time_send">9:10 AM, Today</span>
									</div>
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
								</div>
								<div className="d-flex justify-content-start mb-4">
									<div className="img_cont_msg">
										<img  src="assets/images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""/>
									</div>
									<div className="msg_cotainer">
										Bye, see you
										<span className="msg_time">9:12 AM, Today</span>
									</div>
								</div>
							</div>
							<div className="card-footer type_msg">
								<div className="input-group">
									<textarea className="form-control" placeholder="Type your message..."></textarea>
									<div className="input-group-append">
										<button type="button" className="btn btn-primary"><i className="fa fa-location-arrow"></i></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="alerts" role="tabpanel">
						<div className="card mb-sm-3 mb-md-0 contacts_card">
							<div className="card-header chat-list-header text-center">
								<a href="#">
                                    <div>
                                        <h6 className="mb-1">Notications</h6>
                                        <p className="mb-0">Show All</p>
		    						</div>
                                </a>
                            </div>
							<div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
								<ul className="contacts">
									<li className="name-first-letter">SEVER STATUS</li>
									<li className="active">
										<div className="d-flex bd-highlight">
											<div className="img_cont primary">KK</div>
											<div className="user_info">
												<span>David Nester Birthday</span>
												<p className="text-primary">Today</p>
											</div>
										</div>
									</li>
									<li className="name-first-letter">SOCIAL</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="img_cont success">RU<i className="icon fa-birthday-cake"></i></div>
											<div className="user_info">
												<span>Perfection Simplified</span>
												<p>Jame Smith commented on your status</p>
											</div>
										</div>
									</li>
									<li className="name-first-letter">SEVER STATUS</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="img_cont primary">AU<i className="icon fa fa-user-plus"></i></div>
											<div className="user_info">
												<span>AharlieKane</span>
												<p>Sami is online</p>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="img_cont info">MO<i className="icon fa fa-user-plus"></i></div>
											<div className="user_info">
												<span>Athan Jacoby</span>
												<p>Nargis left 30 mins ago</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="card-footer"></div>
						</div>
					</div>
					<div className="tab-pane fade" id="notes">
						<div className="card mb-sm-3 mb-md-0 note_card">
							<div className="card-header chat-list-header text-center">
								<a href="#">
                                    <div>
                                        <h6 className="mb-1">Notes</h6>
                                        <p className="mb-0">Add New Nots</p>
		    						</div>
                                </a>
								<a href="#">afas</a></div>
							<div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body2">
								<ul className="contacts">
									<li className="active">
										<div className="d-flex bd-highlight">
											<div className="user_info">
												<span>New order placed..</span>
												<p>10 Aug 2020</p>
											</div>
											<div className="ml-auto">
												<a href="#" className="btn btn-primary btn-xs sharp mr-1"><i className="fa fa-pencil"></i></a>
												<a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="user_info">
												<span>Youtube, a video-sharing website..</span>
												<p>10 Aug 2020</p>
											</div>
											<div className="ml-auto">
												<a href="#" className="btn btn-primary btn-xs sharp mr-1"><i className="fa fa-pencil"></i></a>
												<a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="user_info">
												<span>john just buy your product..</span>
												<p>10 Aug 2020</p>
											</div>
											<div className="ml-auto">
												<a href="#" className="btn btn-primary btn-xs sharp mr-1"><i className="fa fa-pencil"></i></a>
												<a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex bd-highlight">
											<div className="user_info">
												<span>Athan Jacoby</span>
												<p>10 Aug 2020</p>
											</div>
											<div className="ml-auto">
												<a href="#" className="btn btn-primary btn-xs sharp mr-1"><i className="fa fa-pencil"></i></a>
												<a href="#" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div className="header">
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                            <div className="dashboard_bar">
                                Product                         </div>
                        </div>

                        <ul className="navbar-nav header-right">
							<li className="nav-item">
								<div className="input-group search-area d-lg-inline-flex d-none">
									<input type="text" className="form-control" placeholder="Search something here..." />
									<div className="input-group-append">
										<button className="input-group-text"><i className="flaticon-381-search-2"></i></button>
									</div>
								</div>
							</li>
							<li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link bell bell-link" href="#">
                                   <span className="badge light text-white bg-primary rounded-circle">18</span>
                                </a>
							</li>
							<li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link  ai-icon" href="#" role="button" data-toggle="dropdown">
                                  	<span className="badge light text-white bg-primary rounded-circle">52</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3 height380">
										<ul className="timeline">
											<li>
												<div className="timeline-panel">
													<div className="media mr-2">
														<img alt="image" width="50"  src="assets/images/avatar/1.jpg" />
													</div>
													<div className="media-body">
														<h6 className="mb-1">Dr sultads Send you Photo</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div className="timeline-panel">
													<div className="media mr-2 media-info">
														KG
													</div>
													<div className="media-body">
														<h6 className="mb-1">Resport created successfully</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div className="timeline-panel">
													<div className="media mr-2 media-success">
														<i className="fa fa-home"></i>
													</div>
													<div className="media-body">
														<h6 className="mb-1">Reminder : Treatment Time!</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											 <li>
												<div className="timeline-panel">
													<div className="media mr-2">
														<img alt="image" width="50"  src="assets/images/avatar/1.jpg" />
													</div>
													<div className="media-body">
														<h6 className="mb-1">Dr sultads Send you Photo</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div className="timeline-panel">
													<div className="media mr-2 media-danger">
														KG
													</div>
													<div className="media-body">
														<h6 className="mb-1">Resport created successfully</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
											<li>
												<div className="timeline-panel">
													<div className="media mr-2 media-primary">
														<i className="fa fa-home"></i>
													</div>
													<div className="media-body">
														<h6 className="mb-1">Reminder : Treatment Time!</h6>
														<small className="d-block">29 July 2020 - 02:26 PM</small>
													</div>
												</div>
											</li>
										</ul>
									</div>
                                    <a className="all-notification" href="#">See all notifications <i className="ti-arrow-right"></i></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown header-profile">
                                <a className="nav-link" href="#" role="button" data-toggle="dropdown">
                                    <img  src="assets/images/profile/17.jpg" width="20" alt=""/>
									<div className="header-info">
										<span className="text-black">Alparozi</span>
										<p className="fs-12 mb-0">Super Admin</p>
									</div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="app-profile.html" className="dropdown-item ai-icon">
                                        <span className="ml-2">Profile </span>
                                    </a>
                                    <a href="email-inbox.html" className="dropdown-item ai-icon">
                                         <span className="ml-2">Inbox </span>
                                    </a>
                                    <a href="page-login.html" className="dropdown-item ai-icon">
                                        <span className="ml-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>		
		

<div className="deznav">
            <div className="deznav-scroll">
				<ul className="metismenu" id="menu">
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-networking"></i>
							<span className="nav-text">Dashboard</span>
						</a>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
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
        <div className="content-body">
    		<div className="container-fluid">
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
					<div className="dropdown custom-dropdown mb-0 mr-4 mt-3 mt-sm-0 mb-2">
						<div className="btn border border-primary text-black btn-rounded" role="button" data-toggle="dropdown" aria-expanded="false">
							Newest
							<i className="las la-angle-down scale5 text-primary ml-3"></i>
						</div>
						<div className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="javascript:void(0);">Details</a>
							<a className="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
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
                <div className="row">
                    {
                        products.map(product=>{
                            return(
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="new-arrival-product">
                                                <div class="new-arrivals-img-contnent">
                                                    <img class="img-fluid"  src={`http://localhost:4000/${product.image}`} alt="" />
                                                </div>
                                                <div class="new-arrival-content text-center mt-3">
                                                    <h4><a href="ecom-product-detail.html">{product.name}</a></h4>
                                                    <ul class="star-rating">
                                                        <li><i class="fa fa-star"></i></li>
                                                        <li><i class="fa fa-star"></i></li>
                                                        <li><i class="fa fa-star"></i></li>
                                                        <li><i class="fa fa-star-half-empty"></i></li>
                                                        <li><i class="fa fa-star-half-empty"></i></li>
                                                    </ul>
                                                    <span class="price">Rp. {product.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            )
                        })
                    }
                    
                </div>
            </div>
			
        </div>
        
		<div className="footer">
    <div className="copyright">
        <p>Copyright © Designed &amp; Developed by <a href="http://dexignzone.com/" target="_blank">DexignZone</a> 2021</p>
    </div>
</div>		
    

    </div>
    </div>
    );
}

export default Home;