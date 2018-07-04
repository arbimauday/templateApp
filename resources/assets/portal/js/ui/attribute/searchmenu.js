import React, {Component} from 'react'
import {render} from 'react-dom'

class SearchMenu extends Component {
    render() {
        return (
            <div id="overlay-search" className="overlay hide" data-pages="search">
                <div className="overlay-content has-results m-t-20">
                    <div className="container-fluid">
                        <button className="btn btn-outline-primary overlay-close fs-16" id="close-search" type="button">
                            <i className="fa fa-close"></i>
                        </button>
                    </div>

                    <br/><br/>

                    <div className="container-fluid">
                        <input className="no-border overlay-search bg-transparent" placeholder="Search..."/>
                    </div>

                    <hr/>
                    <div className="container-fluid">
                        <div className="search-results m-t-40">
                            <div className="row" id="show-menu">
                                <div className="col-md-6 col-sm-6">
                                    <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                                        <span className="fa fa-search fa-2x"></span>
                                    </div>
                                    <div>
                                        <div className="p-l-10 inline p-t-5">
                                            <h5 className="m-b-5">
                                                <a className="bold result-name" style={{color:'black'}} href="#">Link Test</a>
                                            </h5>
                                            <p className="hint-text">Hello this is link test</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<SearchMenu/>, document.getElementById('vc-searchMenu'));