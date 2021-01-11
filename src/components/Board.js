import React, {Component} from 'react';
import '../css/Board.css';
import Notes from './Notes';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state ={
        notes: [
            // {
            //     title: "Class Notes",
            //     body: "Always use constructors when extending another class"
            //   },
            //   {
            //     title: "My New Address",
            //     body: "2001 N Lonhill Phoenix, AZ 81234"
            //   },
            //   {
            //     title: "React Notes",
            //     body: "Everything in React is a component"
            //   }
        ]
    }
  }
addNote () {
//   "PUSH" ADDS ANOTHER ITEM AT THE END OF THE ARRAY ^
  this.state.notes.push(
    {
      title: "New Note Title",
      body: "New Note body",
      id: Date.now
    }
  );
//  .SETSTATE UPDATES THE STATE AND RERENDERS
  this.setState(
    {
      notes: this.state.notes
    }
  );
}
// creating an id of card from which the delete button will be clicked
deleteNote(id){
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
      if (id === note.id) {
        newNoteArr.splice(index,1);
      }
    });
    this.setState(
      {
        notes: newNoteArr
      }
    );
  }
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
          {this.state.notes.map(item => {
                return <Notes title={item.title} body={item.body} return key={item.id} id={item.id} deleteHandler={this.deleteNote.bind(this)} />
              })
            }
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add</button>
     
        </div>
      </div>
    );
  }
}

export default Board;