import React, { Component } from 'react';

export class AddTodo extends Component {
    
    state= {
        //add fields here
        title: '',
        label: ''
    }

    //fetches all labels from the list
    getAllLabels = ()=> {
        let labels = [];
        let count = 0;
        this.props.todos.map(i=> {
            labels[count] = i.label;
            count++;
        });
        //gathers only distinct label
        let distinctLabels = [...new Set(labels)];
        console.log("Fetched "+distinctLabels.length+ " labels")
        return distinctLabels;
    }

    onSubmit = (e)=> {
        e.preventDefault();
        //if label is not provided
        if(this.state.label==='') {
            this.state.label = 'general';
        }
        this.props.addTodo(this.state.title, this.state.label);
        this.setState( {title: ''}) //clear after submit
        this.setState( {label: ''})
    }

    //renders the option label
    renderElement = (labels)=> {
        let count = 1;
        return labels.map(function (label) {
            return (
                <option key={ count++ } value={label} ></option>
            )
        })
    }

    onChange = (e)=> this.setState( { [e.target.name]: e.target.value });

    render() {
        let labels = this.getAllLabels();
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input className="title-input" style={ inputStyle }
                    type="text" name="title" placeholder="add a todo.."
                    value = {this.state.title}
                    onChange = {this.onChange}
                />
                <input className="label-input" style= { optionStyle } 
                    list="labels" name="label" placeholder="label/bucket" 
                    value = {this.state.label} 
                    onChange = {this.onChange} 
                />
               
                <datalist id="labels">
                    { this.renderElement(labels) }    
                </datalist>

                <input  style={{ flex: '1'}}
                    type="submit" value="Submit" className="btn"
                />
            </form>
        );
        
    }

    
}

//jsx css
const optionStyle = {
    flex: '3',
    fontSize: '24px',
    fontFamily: 'cursive',
    margin: '10px',
    padding: '5px 20px',
    borderRadius: '6px',
    border: '1.2px solid gray'
}

const inputStyle = {
    flex: '8',
    fontSize: '24px',
    fontFamily: 'cursive',
    padding: '5px 20px',
    margin: '10px 30px',
    borderRadius: '6px',
    border: '1.2px solid gray'
}

export default AddTodo;