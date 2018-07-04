import React, { Component } from "react"
// import {Switch, Route} from  'react-router-dom'
import {
    Switch,
    Route
} from 'react-router-dom';

import {browserHistory} from 'react-router'

// Routes Component
import Dashboard from './pages/Dashboard'
import Color from './pages/elements/Color'

export default class Routes extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(name){
        alert(name)
        browserHistory.push(name);
        this.render();
    }

    render(){
        alert('hello');
        return(
                <div>

                    <div className="content">
                        <div className="bg-white">
                            <div className="container">
                                <ol className="breadcrumb breadcrumb-alt">
                                    <li className="breadcrumb-item"><a onClick={()=> this.handleSubmit('/dashboard')}>link</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <Route exact path="/" component={Color}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/color" component={Color}/>
                </div>
        )
    }
}