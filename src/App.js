import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import TaskCard from './Components/TaskCard';
import FormTodo from './Components/TodoForm';
import {todos} from './todos.json';
console.log(todos);
class App extends Component {
  //Usamos el contructor usando la palabra super para ejecutar primeramente el contructor de la super clase
  constructor()
  {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo)
  {
    this.setState({
     todos: [...this.state.todos,todo]
    });
    // console.log(this.state);
  }
  removeTodo(index)
  {
    if(window.confirm("Are you really sure to delete it?"))
    {
      //nota confirm es un metodo del navegador por lo tanto se debe hacer referencia a esto asi : window.confirm("texto");
      this.setState({
        todos: this.state.todos.filter((element,i)=>{
          return index != i
        })
        //filter devuelve un nuevo arreglo filtrado, no se devuelven los elementos que no cumplan
      });
    }
    //console.log(index);
  }
  render() {
    const todos = this.state.todos.map((todo,index)=>
    {
      return (
      <TaskCard title = {todo.title} description ={todo.description} key={index} 
        priority={todo.priority} responsible={todo.responsible} removeTodo={this.removeTodo.bind(this,index)}/>
      )
      
    });
    return (
      <div className="App">
        <Navigation titulo = "Task" ntareas = {todos.length} />
        <div className = "container">
          <div className="row mt-4">
            <FormTodo onAddTodo = {this.handleAddTodo} />
            {todos}
          </div>
          
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        
      </div>
    );
  }
}

export default App;

/*
  Se pueden agregar a state las propiedades que se deseen sinembargo
  es recomendable hacerlo al minimo ya que estas son almacenadas en memoría
Ejm :

this.state = {
      "title": "Aplicación de Tareas",
      "ntareas": 10
    }

  --Iterando se podian presentar las tareas 
    de la siguiente forma sin hacer uso de componentes


        <div className="col-md-4" key ={index}>
          <div className="card mt-4">
              <div className="card-header">
                  <h3>{todo.title}</h3>
              </div>
              <div className="card-body">
                  <p>{todo.description}</p>
              </div>
          </div>
      </div>*/