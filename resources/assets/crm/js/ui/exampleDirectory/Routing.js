import React, { Component } from 'react'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

// Data Component as page
import Data1 from './component/Data1'
import Data2 from './component/Data2'

export default class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                {/*this part navigation*/}
                <Link to={'/'}>Data1</Link>
                <Link to={'/data2'}>Data2</Link>

                <Switch>
                    <Route exact path={'/'} component={Data1} />
                    <Route exact path={'/data2'} component={Data2} />

                    {/*as page 404 or url not found*/}
                    <Route exact path={'*'} component={} />
                </Switch>
            </BrowserRouter>
        );
    }
}