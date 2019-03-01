import React from 'react';

class Note extends React.Component {

    constructor() {
        super();
        // this.edittt = this.edit.bind(this);
        // constructors gets called with each new instance, and sets the properties of the new object that are given here
        this.edit = function(){
            alert('from constructor!');
        }
        this.removeee = this.remove.bind(this);
        // The first this.edit refers to a property that will be created in every instance, because its being set in the constructor. The second this.edit refers to an already existing property living in the prototype object of the class. 
        // This connection allows the instantiated Note to call the methods in the prototype, which are separate.
    }

    // ===== included in prototype, separate from constructor(): ===================
    // thus these are accessible from the instance as the parent/prototypal reference
    edit() {
        alert('from prototype!');
        console.log(this); // this == undefined unless: this.remove = this.remove.bind(this); in the constructor        
    }
    remove() {
        alert('removing...');
        console.log(this);
    }
    render() {        
        return(
            <div className="note">
                <p>Learn React</p>
                <span>
                    {/* onClick={this.edit} is treated as callback */}
                    <button id='edit' onClick={this.edit}>Edit</button> 
                    <button id='remove' onClick={this.removeee}>Remove</button>
                </span>
            </div>
        );  
    }
}

let test = new Note();
test.edit();

export default Note;