import React from 'react';
import Note from './Note';

class Board extends React.Component {
    constructor() {
        super()
        this.state = {
            notes: [
                {
                    id: 1,
                    note: 'pay AT&T'
                },
                {
                    id: 2,
                    note: 'ship package'
                },
                {
                    id: 3,
                    note: 'pick up groceries'
                },
            ]
        }
        this.eachNote = this.eachNote.bind(this)
    }
    eachNote(currentNote, index) {
        return(
            <Note key={index}>{currentNote.note}</Note>
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