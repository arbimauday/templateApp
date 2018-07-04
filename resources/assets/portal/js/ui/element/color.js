import React, {Component} from 'react'
import {render} from 'react-dom'

class Color extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="card card-transparent">
                        <div className="card-block">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="bg-master b-a b-grey m-b-15">
                                        <div className="bg-white m-t-45 padding-10">
                                            <p className=" no-margin pull-left">Master color</p>
                                            <p className=" no-margin pull-right">100%</p>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="bg-primary b-a b-grey m-b-15">
                                        <div className="bg-white m-t-45 padding-10 text-master">
                                            <p className=" no-margin pull-left">Primary color</p>
                                            <p className=" no-margin pull-right">100%</p>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="bg-complete b-a b-grey m-b-15">
                                        <div className="bg-white m-t-45 padding-10">
                                            <p className=" no-margin pull-left">Complete</p>
                                            <p className=" no-margin pull-right">100%</p>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="bg-success b-a b-grey m-b-15">
                                        <div className="bg-white m-t-45 padding-10">
                                            <p className=" no-margin pull-left">Success color</p>
                                            <p className=" no-margin pull-right">100%</p>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="bg-menu b-a b-grey m-b-15">
                                        <div className="bg-white m-t-45 padding-10">
                                            <p className=" no-margin pull-left">Menu color</p>
                                            <p className=" no-margin pull-right">100%</p>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="bg-info b-a b-grey m-b-15">
                                        <div className="bg-white m-t-45 padding-10">
                                            <p className=" no-margin pull-left">Info color</p>
                                            <p className=" no-margin pull-right">100%</p>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="bg-danger b-a b-grey m-b-15">
                                        <div className="bg-white m-t-45 padding-10">
                                            <p className=" no-margin pull-left">Danger color</p>
                                            <p className=" no-margin pull-right">100%</p>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="bg-warning b-a b-grey m-b-15">
                                        <div className="bg-white m-t-45 padding-10">
                                            <p className=" no-margin pull-left">Warning color</p>
                                            <p className=" no-margin pull-right">100%</p>
                                            <div className="clearfix"></div>
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

render(<Color/>, document.getElementById('vc-colors'));