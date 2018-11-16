import React, {Component} from 'react';

class TodoForm extends Component
{
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" name="title"  
                        onChange = {this.handleInput}
                        className="form-control" placeholder="Title" />  
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible"  
                        className="form-control" placeholder="Responsible" />  
                    </div>
                    <div className="form-group">
                        <input type="text" name="description"  
                        className="form-control" placeholder="Description" />  
                    </div>
                </div>
            </div>
        )
    }
    handleInput(e)
    {
        console.log(e.target.value);
    }
}

export default TodoForm;