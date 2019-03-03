import React from 'react';
import Note from './Note';

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            notes: [
                {
                    id: 0,
                    note: 'pay AT&T'
                },
                {
                    id: 1,
                    note: 'ship package'
                },
                {
                    id: 2,
                    note: 'pick up groceries'
                },
            ]
        }
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
    }
	update(newText, i) {
        console.log('updating item at index', i, newText)
        // this syntax is updating state to a value, which is computed based on previous state (prevState)!
		this.setState(
            (prevState) => (
                {
                    notes: prevState.notes.map(
                        note => (note.id !== i) ? note : {...note, note: newText}
                    )
                }
            )
        )
	}
    eachNote(currentNote, index) {
        return(
            <Note 
                // below items will be passed to the child as part of props object:
                index={index}
                onChange={this.update}
                key={index} // “key” is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. An important note for key usage is that they only have to be unique among their siblings
            >{currentNote.note}</Note>
            // {currentNote.note} between the open/close tags are passed to child as children
        );
    }
    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        );
    }
}

export default Board;