import React, {Component} from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div className="content sm-gutter">
                <div className="bg-white">
                    <div className="container">
                        <ol className="breadcrumb breadcrumb-alt">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                </div>


            </div>
        )
    }
}
export default Dashboard;