import React, { Component } from 'react'

class Note extends Component {
	constructor(props) {
		super(props)
		this.state = {
            test: 123,
			editing: false // setting initial state
		}
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
		this.save = this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
	}
	edit() {
		this.setState({
            test: 321,
			editing: true // re-setting state when edit() is invoked
		})
	}

	remove() {
		alert('removing note');
	}

    save(event) {
		event.preventDefault();
		console.log(this.props);
		this.props.onChange(this.textInput.value, this.props.index); // onChange is passed in from Board.js, hence its in the props
		this.setState({
			editing: false
		});
	}

	renderForm() {
		return (
			<div className="note">
				<form onSubmit={this.save}>
					<textarea ref={
                        (input) => {
							this.textInput = input
							// grabbing input and setting it to this.textInput
                        }
                    }/>
					<button id="save">Save</button>
				</form>
			</div>
		)
	}

	renderDisplay() {        
		return (
			<div className="note">
				<p>{this.props.children}</p>
				<span>
					<button onClick={this.edit} id="edit">Edit</button>
					<button onClick={this.remove} id="remove">Remove</button>
				</span>
			</div>
		)
	}
	render() {        
		return this.state.editing ? this.renderForm() : this.renderDisplay() // conditional rendering of markup based on state
	}

}

export default Note;





