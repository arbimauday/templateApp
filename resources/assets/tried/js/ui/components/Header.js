import React, {Component} from 'react'
import Navigation from './Navigation'
import Logo from '../assets/img/logo_white.png'
import Logo2 from '../assets/img/logo_white_2x.png'
import Avatar1 from '../assets/img/profiles/avatar.jpg'
import Avatar2 from '../assets/img/profiles/avatar_small2x.jpg'
import Profil1 from '../assets/img/profiles/1.jpg'
import Profil_1x from '../assets/img/profiles/1x.jpg'

export default class Header extends Component {
    render() {
        return (
            <div className="header p-r-0 bg-primary">
                <div className="header-inner header-md-height box-shadow-header">
                    <a className="btn-link toggle-sidebar hidden-lg-up pg pg-menu text-white pointer"
                       data-toggle="horizontal-menu" href="#"></a>
                    <div>
                        <div className="brand inline no-border hidden-xs-down">
                            <img src={Logo} alt={Logo} data-src={Logo}
                                 data-src-retina={Logo2} width="78" height="22"/>
                        </div>
                        {/*START NOTIFICATION LIST*/}
                        <ul className="hidden-md-down notification-list no-margin hidden-sm-down b-grey b-l b-r no-style p-l-30 p-r-20">
                            <li className="p-r-10 inline">
                                <div className="dropdown">
                                    <a href="javascript:;" id="notification-center" className="header-icon pg pg-world"
                                       data-toggle="dropdown">
                                        <span className="bubble"></span>
                                    </a>
                                    {/* START Notification Dropdown */}
                                    <div className="dropdown-menu notification-toggle" role="menu"
                                         aria-labelledby="notification-center">
                                        {/* START Notification */}
                                        <div className="notification-panel">
                                            {/* START Notification Body*/}
                                            <div className="notification-body scrollable">
                                                {/* START Notification Item*/}
                                                <div className="notification-item unread clearfix">
                                                    {/* START Notification Item*/}
                                                    <div className="heading open">
                                                        <a href="#" className="text-complete pull-left">
                                                            <i className="pg-map fs-16 m-r-10"></i>
                                                            <span className="bold">Carrot Design</span>
                                                            <span className="fs-12 m-l-10">David Nester</span>
                                                        </a>
                                                        <div className="pull-right">
                                                            <div
                                                                className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                                                                <div><i className="fa fa-angle-left"></i>
                                                                </div>
                                                            </div>
                                                            <span className=" time">few sec ago</span>
                                                        </div>
                                                        <div className="more-details">
                                                            <div className="more-details-inner">
                                                                <h5 className="semi-bold fs-16">“Apple’s Motivation -
                                                                    Innovation <br/>
                                                                    distinguishes between <br/>
                                                                    A leader and a follower.”</h5>
                                                                <p className="small hint-text">
                                                                    Commented on john Smiths wall.
                                                                    <br/> via pages framework.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* END Notification Item*/}
                                                    {/* START Notification Item Right Side*/}
                                                    <div className="option" data-toggle="tooltip" data-placement="left"
                                                         title="mark as read">
                                                        <a href="#" className="mark"></a>
                                                    </div>
                                                    {/* END Notification Item Right Side*/}
                                                </div>
                                                {/* START Notification Body*/}
                                                {/* START Notification Item*/}
                                                <div className="notification-item  clearfix">
                                                    <div className="heading">
                                                        <a href="#" className="text-danger pull-left">
                                                            <i className="fa fa-exclamation-triangle m-r-10"></i>
                                                            <span className="bold">98% Server Load</span>
                                                            <span className="fs-12 m-l-10">Take Action</span>
                                                        </a>
                                                        <span className="pull-right time">2 mins ago</span>
                                                    </div>
                                                    {/* START Notification Item Right Side*/}
                                                    <div className="option">
                                                        <a href="#" className="mark"></a>
                                                    </div>
                                                    {/* END Notification Item Right Side*/}
                                                </div>
                                                {/* END Notification Item*/}
                                                {/* START Notification Item*/}
                                                <div className="notification-item  clearfix">
                                                    <div className="heading">
                                                        <a href="#" className="text-warning-dark pull-left">
                                                            <i className="fa fa-exclamation-triangle m-r-10"></i>
                                                            <span className="bold">Warning Notification</span>
                                                            <span className="fs-12 m-l-10">Buy Now</span>
                                                        </a>
                                                        <span className="pull-right time">yesterday</span>
                                                    </div>
                                                    {/* START Notification Item Right Side*/}
                                                    <div className="option">
                                                        <a href="#" className="mark"></a>
                                                    </div>
                                                    {/* END Notification Item Right Side*/}
                                                </div>
                                                {/* END Notification Item*/}
                                                {/* START Notification Item*/}
                                                <div className="notification-item unread clearfix">
                                                    <div className="heading">
                                                        <div
                                                            className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                                                            <img width="30" height="30"
                                                                 data-src-retina={Profil_1x}
                                                                 data-src={Profil1} alt=""
                                                                 src={Profil1}/>
                                                        </div>
                                                        <a href="#" className="text-complete pull-left">
                                                            <span className="bold">Revox Design Labs</span>
                                                            <span className="fs-12 m-l-10">Owners</span>
                                                        </a>
                                                        <span className="pull-right time">11:00pm</span>
                                                    </div>
                                                    {/* START Notification Item Right Side*/}
                                                    <div className="option" data-toggle="tooltip" data-placement="left"
                                                         title="mark as read">
                                                        <a href="#" className="mark"></a>
                                                    </div>
                                                    {/* END Notification Item Right Side*/}
                                                </div>
                                                {/* END Notification Item*/}
                                            </div>
                                            {/* END Notification Body*/}
                                            {/* START Notification Footer*/}
                                            <div className="notification-footer text-center">
                                                <a href="#" className="">Read all notifications</a>
                                                <a data-toggle="refresh"
                                                   className="portlet-refresh text-black pull-right" href="#">
                                                    <i className="pg-refresh_new"></i>
                                                </a>
                                            </div>
                                            {/* START Notification Footer*/}
                                        </div>
                                        {/* END Notification */}
                                    </div>
                                    {/* END Notification Dropdown */}
                                </div>
                            </li>
                            <li className="p-r-10 inline">
                                <a href="#" className="header-icon pg pg-link"></a>
                            </li>
                            <li className="p-r-10 inline">
                                <a href="#" className="header-icon pg pg-thumbs"></a>
                            </li>
                        </ul>
                        {/* END NOTIFICATIONS LIST */}
                        <a href="#" className="search-link hidden-md-down" data-toggle="search"><i
                            className="pg-search"></i>Type anywhere to <span className="bold">search</span></a>
                    </div>
                    <div className="d-flex align-items-center">
                        {/* START User Info*/}
                        <div className="pull-left p-r-10 fs-14 font-heading hidden-md-down text-white">
                            <span className="semi-bold">David</span> <span className="">Nest</span>
                        </div>
                        <div className="dropdown pull-right">
                            <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
              <span className="thumbnail-wrapper d32 circular inline sm-m-r-5">
                <img src={Avatar1} alt="" data-src={Avatar1}
                     data-src-retina={Avatar2} width="32" height="32"/>
                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
                                <a href="#" className="dropdown-item"><i className="pg-settings_small"></i>
                                    Settings</a>
                                <a href="#" className="dropdown-item"><i className="pg-outdent"></i> Feedback</a>
                                <a href="#" className="dropdown-item"><i className="pg-signals"></i> Help</a>
                                <a href="#" className="clearfix bg-master-lighter dropdown-item">
                                    <span className="pull-left">Logout</span>
                                    <span className="pull-right"><i className="pg-power"></i></span>
                                </a>
                            </div>
                        </div>
                        {/* END User Info*/}
                        <a href="#" className="header-icon pg pg-alt_menu btn-link m-l-10 sm-no-margin d-inline-block"
                           data-toggle="quickview" data-toggle-element="#quickview"></a>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="container">
                        <div className="menu-bar header-sm-height" data-pages-init='horizontal-menu'
                             data-hide-extra-li="4">
                            <a href="#" className="btn-link toggle-sidebar hidden-lg-up pg pg-close"
                               data-toggle="horizontal-menu">
                            </a>
                            <Navigation/>
                            <a href="#"
                               className="search-link d-flex justify-content-between align-items-center hidden-lg-up"
                               data-toggle="search">Tap here to search <i className="pg-search float-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}