import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// Part View
import Header from './components/Header'
import Routes from './Routes'
import Footer from './components/Footer'

export default class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className="page-container">
                    <div className="page-content-wrapper">
                        <Routes/>
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}


if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}