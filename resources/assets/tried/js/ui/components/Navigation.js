import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {browserHistory} from 'react-router'

class Navigation extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(name){
        alert(name)
        browserHistory.push(name);
    }

    render() {
        return (
            <ul>
                <li className=" active">
                    <a onClick={()=> this.handleSubmit('/dashboard')}>Dashboard</a>
                </li>
                <li>
                    <a href="#/color"><span className="title">Social</span></a>
                </li>
                <li>
                    <a href="javascript:;"><span className="title">Calendar</span>
                        <span className=" arrow"></span></a>
                    <ul className="">
                        <li className="">
                            <a href="calendar.html">Basic</a>
                        </li>
                        <li className="">
                            <a href="calendar_lang.html">Languages</a>
                        </li>
                        <li className="">
                            <a href="calendar_month.html">Month</a>
                        </li>
                        <li className="">
                            <a href="calendar_lazy.html">Lazy load</a>
                        </li>
                        <li className="">
                            <a href="http://pages.revox.io/dashboard/2.1.0/doc/#calendar" target="_blank">Documentation</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;"><span className="title">UI Elements</span>
                        <span className=" arrow"></span></a>
                    <ul className="">
                        <li className="">
                            <a href="/color">Color</a>
                        </li>
                        <li className="">
                            <a href="typography.html">Typography</a>
                        </li>
                        <li className="">
                            <a href="icons.html">Icons</a>
                        </li>
                        <li className="">
                            <a href="buttons.html">Buttons</a>
                        </li>
                        <li className="">
                            <a href="notifications.html">Notifications</a>
                        </li>
                        <li className="">
                            <a href="modals.html">Modals</a>
                        </li>
                        <li className="">
                            <a href="progress.html">Progress &amp; Activity</a>
                        </li>
                        <li className="">
                            <a href="tabs_accordian.html">Tabs &amp; Accordions</a>
                        </li>
                        <li className="">
                            <a href="sliders.html">Sliders</a>
                        </li>
                        <li className="">
                            <a href="tree_view.html">Tree View</a>
                        </li>
                        <li className="">
                            <a href="nestables.html">Nestable</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;">
                        <span className="title">Forms</span>
                        <span className=" arrow"></span>
                    </a>
                    <ul className="">
                        <li className="">
                            <a href="form_elements.html">Form Elements</a>
                        </li>
                        <li className="">
                            <a href="form_layouts.html">Form Layouts</a>
                        </li>
                        <li className="">
                            <a href="form_wizard.html">Form Wizard</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="builder.html">
                        <span className="title">Builder</span>
                    </a>
                </li>
                <li>
                    <a href="cards.html">
                        <span className="title">Cards</span>
                    </a>
                </li>
                <li>
                    <a href="views.html">
                        <span className="title">Views</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;"><span className="title">Tables</span>
                        <span className=" arrow"></span></a>
                    <ul className="">
                        <li className="">
                            <a href="tables.html">Basic Tables</a>
                        </li>
                        <li className="">
                            <a href="datatables.html">Data Tables</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;"><span className="title">Maps</span>
                        <span className=" arrow"></span></a>
                    <ul className="">
                        <li className="">
                            <a href="google_map.html">Google Maps</a>
                        </li>
                        <li className="">
                            <a href="vector_map.html">Vector Maps</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="charts.html"><span className="title">Charts</span></a>
                </li>
                <li>
                    <a href="javascript:;"><span className="title">Extra</span>
                        <span className=" arrow"></span></a>
                    <ul className="">
                        <li className="">
                            <a href="invoice.html">Invoice</a>
                        </li>
                        <li className="">
                            <a href="404.html">404 Page</a>
                        </li>
                        <li className="">
                            <a href="500.html">500 Page</a>
                        </li>
                        <li className="">
                            <a href="blank_template.html">Blank Page</a>
                        </li>
                        <li className="">
                            <a href="login.html">Login</a>
                        </li>
                        <li className="">
                            <a href="register.html">Register</a>
                        </li>
                        <li className="">
                            <a href="lock_screen.html">Lockscreen</a>
                        </li>
                        <li className="">
                            <a href="gallery.html">Gallery</a>
                        </li>
                        <li className="">
                            <a href="timeline.html">Timeline</a>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}

export default Navigation;
