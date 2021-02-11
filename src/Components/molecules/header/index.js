import React from 'react';

function Header(props) {
    return (
        <>
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
										<span className="text-black">ALFAROZI</span>
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
		
        </>
    );
}

export default Header;