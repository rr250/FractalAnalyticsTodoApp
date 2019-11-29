import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ToDo from './components/ToDo';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';


class App extends Component {
  //current state of the application, with sample todos
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'finish the Deep Learning assignment',
        completed: false,
        label: 'general'
      },
      {
        id: uuid.v4(),
        title: 'Meeting with teammates',
        completed: false,
        label: 'urgent'
      },
      {
        id: uuid.v4(),
        title: 'sleep before 12PM',
        completed: false,
        label: 'general'
      }
    ]
  }

  //handle the complete state of the todo
  markComplete = (id)=> {
    console.log("toggling state of id:"+id);
    this.setState( { todos: this.state.todos.map( todo=> {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })  })
  }

  //deletes a todo
  delTodo = (id)=> {
    console.log("deleting task with id:"+id);
    this.setState( { todos: [...this.state.todos.filter(todo => 
      todo.id !== id) 
    ] });
  }

  //add a new todo to list
  addTodo = (title, label)=> {
    console.log("adding the title: "+title+" with label: "+label);
    const newTodo = {
      id: uuid.v4(),
      title, //title: title
      completed: false,
      label: label
    }
    this.setState( {todos: [...this.state.todos, newTodo] });
  }

  //edit a todo
  editTodo = (id)=> {
    let newTitle = prompt("enter new data");
    if(newTitle!=null) {
      this.setState( {todos: this.state.todos.map(todo=> {
        if(todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      }) })
    } 
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo 
              addTodo={this.addTodo}  
              todos = {this.state.todos}
            />
            <div className="card-container">
              <ToDo 
                todos= {this.state.todos} 
                markComplete = { this.markComplete}
                delTodo={this.delTodo} 
                editTodo={this.editTodo}
              />
            </div>
          </div>    
        </div>
      </Router>
    );

  }
}

export default App;
