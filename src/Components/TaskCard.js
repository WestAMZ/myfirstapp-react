import React, {Component} from 'react';

class TaskCard extends Component
{
    render(){
        return(
            <div className="col-md-4" key={this.key}>
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default TaskCard;