import React, {Component} from 'react';

class TodoForm extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            title:'',
            responsible: '',
            description: '',
            priority:'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        //esto se hace xq en react se suele perder a que apunta this
        //se une metodo handleInput a este componente
    }
    render(){
        return(
            <div className="col-md-4 mt-4">
                <form className="card" onSubmit = {this.handleSubmit}>
                    <div className="card-body">
                        <div className="form-group">
                            <input type="text" name="title"  
                            onChange = {this.handleInput}
                            className="form-control" placeholder="Title" />  
                        </div>
                        <div className="form-group">
                            <input type="text" name="responsible"
                            onChange = {this.handleInput}  
                            className="form-control" placeholder="Responsible" />  
                        </div>
                        <div className="form-group">
                            <input type="text" name="description"
                            onChange = {this.handleInput}  
                            className="form-control" placeholder="Description" />  
                        </div>
                        <div className="form-group">
                            <select name="priority" onChange = {this.handleInput}  
                            className="form-control" placeholder="Description" >  
                                <option value="low">low</option>
                                <option value="medium">medium</option>
                                <option value="hight">hight</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary" 
                        value="Save"/>
                    </div>
                </form>
            </div>
        )
    }
    handleSubmit(e)
    {
        e.preventDefault()
        this.props.onAddTodo(this.state);
    }
    handleInput(e)
    {
        const {value,name} = e.target; //toma value y name 
        this.setState({
            [name]:value
        })
        //buscamos propiedad nombrada y valor
        //console.log(this.state);
    }
    
    //console.log(e.target.value,e.target.name); //valor de target y nombre
    //asi obtenemos el nombre de imput :e.targe.name 
    
}

export default TodoForm;

    /* 
        no se pueden hacer asignaciones directas 
        this.state.title = "algo nuevo";
       
    */