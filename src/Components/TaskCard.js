import React, {Component} from 'react';

class TaskCard extends Component
{
    constructor()
    {
        super();
        this.handleRemove = this.handleRemove.bind(this);
    }
    render(){
        return(
            <div className="col-md-4" key={this.key}>
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{this.props.title}</h3>
                        <span className="badge badge-pill badge-danger ml-2">{this.props.priority}</span>
                    </div>
                    <div className="card-body">
                        <p>{this.props.description}</p>
                        <strong>{this.props.responsible}</strong>
                    </div>
                    <div className="card-footer">
                        <button onClick={this.handleRemove} className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    handleRemove(e)
    {
        this.props.removeTodo(this,this.key)
    }
}
export default TaskCard;