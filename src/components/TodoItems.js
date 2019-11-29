import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItems extends Component {
    //dynamic style for completed tasks
    getStyle = ()=> {
        return {
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }
    cardStyle = ()=> {
        return {
            border: this.props.todo.completed ? '4px solid green' : '4px solid transparent',
            background: this.props.todo.completed ? 'rgba(138, 243, 142, 0.28)' : '#fff'
        }
    }

    render() {

        const {id, title, label} = this.props.todo; //deconstructing 
        return (
                <div className="card" style = { this.cardStyle()}> 
                    <p className="title" style={ this.getStyle()}>{ title } </p>
                    <div className="tag"> { label }</div>
                    <div className="u-btns">
                        <button className="btns complete" onClick= {this.props.markComplete.bind( this, id)}> Done</button> 
                        <button className="btns delete" onClick={this.props.delTodo.bind(this, id)}>Delete</button> 
                        <button className="btns edit" onClick= {this.props.editTodo.bind(this, id) }>Edit</button>
                    </div>   
                </div>
        )
    }
}


TodoItems.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItems;