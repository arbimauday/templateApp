import React from 'react'
import {render} from 'react-dom'
import Data1 from './component/Data1'
import Data2 from './component/Data2'

// example base
class Example extends React.Component{
    render(){
        return(
            <div>
                <Data1></Data1>
                <Data2></Data2>
            </div>
        );
    }
}
render(<Example/>, document.getElementById('example'));


// example with router
import Routing from './Routing'
render(<Routing/>, document.getElementById('routingExample'));