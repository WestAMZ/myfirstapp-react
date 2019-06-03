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
    })
  }
  render() {
    const todos = this.state.todos.map((todo,index)=>
    {
      return (
      <TaskCard title = {todo.title} description ={todo.description} key={index} 
        priority={todo.priority} responsible={todo.responsible}/>
      )
      
    });
    return (
      <div className="App">
        <Navigation titulo = "Task" ntareas = {todos.length} />
        <div className = "container">
          <div className="row mt-4">
            <FormTodo onAddTodo={this.handleAddTodo}/>
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