import React, {Component} from 'react'
import {render} from 'react-dom'

class Table extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 m-b-10">
                    <div className="widget-11-2 card card-bordered card-condensed no-margin widget-loader-circle align-self-stretch d-flex flex-column">
                        <div className="card-block">
                            <div className="scrollable">
                                <div style={{height: 700}}>
                                    <div className="table-responsive">
                                        <table className="table table-hover timesheetDT">
                                            <thead className="bg-master-lighter">
                                               <tr>
                                                   <th className="text-black w-150">Employee</th>
                                                    <th className="text-black" style={{width:'100px'}}>Shift</th>
                                                    <th className="text-black">Clock-In
                                                        <i className="fa fa-eye cursor" style={{color:'darkgrey'}}></i>
                                                    </th>
                                                    <th className="text-black">Clock-Out
                                                        <i className="fa fa-eye cursor" style={{color:'darkgrey'}}></i></th>
                                                    <th className="text-black">Approve Stats</th>
                                                    <th className="text-black">Valid Stats</th>
                                                    <th className="text-black">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="odd">
                                                    <td style={{display:'none'}}>No data available in table
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
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

render(<Table/>, document.getElementById('vc-table'));