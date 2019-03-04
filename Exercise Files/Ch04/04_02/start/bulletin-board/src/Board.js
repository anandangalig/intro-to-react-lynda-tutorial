import React from 'react';
import Note from './Note';

class Board extends React.Component {
    constructor() {
        super()
        this.update = this.update.bind(this)
        this.eachNote = this.eachNote.bind(this)
        this.remove = this.remove.bind(this)
        this.add = this.add.bind(this)
        this.nextId = this.nextId.bind(this)
        this.state = {
            notes: []
        }
    }
	update(newText, i) { // these 2 params are passed in from a saved child Note (this.props.onChange(this.textInput.value, this.props.index);)
		this.setState(
            // this syntax is updating state to a value, which is computed based on previous state (prevState)!
            (prevState) => (
                {
                    notes: prevState.notes.map(
                        note => (note.id !== i) ? note : {...note, note: newText} // in other words, if the id of the updated note matches, update the note text with newText, otherwise return the current note as is.
                    )
                }
            )
        )
    }
    remove(id) { // id param is passes from the child component via props onRemove method invocation
        this.setState(
            (prevState) => (
                {
			        notes: prevState.notes.filter(
                        note => note.id !== id
                    )
                }
            )
        )
    }
    add(){
        this.setState(
            (prevState) => (
                {
			        notes: [...prevState.notes, {id: this.nextId(), note: 'New Note'}] // essentially resetting the state with existing state.note + a new note
                }
            )
        )
    }
    nextId(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }
    eachNote(currentNote, index) {
        return(
            <Note 
                // below items will be passed to the child as part of props object:
                index={index}
                onChange={this.update}
                onRemove={this.remove} // when onRemove is triggered by a child, it will trigger remove method of this parent
                key={index} // “key” is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. An important note for key usage is that they only have to be unique among their siblings
            >{currentNote.note}</Note>
            // {currentNote.note} between the open/close tags are passed to child as 'children'
        );
    }
    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.add} id='add'>Add</button>
            </div>
        );
    }
}

export default Board;