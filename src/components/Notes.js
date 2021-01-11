import React, {Component} from 'react';
import '../css/Notes.css';

class Note extends Component {
  constructor(props) {
    super(props);
    this.titleContent = React.createRef();
    this.bodyContent = React.createRef();
    this.state = {
        title: this.props.title,
        body: this.props.body,
        editMode: false
    }
  }
  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    this.setState({
      title: this.titleContent.current.value,
      body: this.bodyContent.current.value,
      editMode: false
    });
  }
  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }
//   assigning elements to be rendered as variables: 
  render(){
    let titleElement, bodyElement, buttonArea; 
    // if edit mode is true (user clicked on edit):
    if (this.state.editMode){
      titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
      bodyElement = <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.body}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    }
    // else if edit mode is false:
    else{
      titleElement = <h5 className="card-title">{this.state.title}</h5>;
      bodyElement = <p>{this.state.body}</p>; 
      buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>;
    }
    // after traversing that ^ if/else step, always return a title, a body, and a button, each with variable values
    return (
          <div className='col-sm-6'>
          <div className="card card-view">
              <div className="card-body">
                {titleElement}
                {bodyElement}
                {buttonArea}
                </div>
            </div>
        </div>
    );
  }
//   render() {
//     return (
//       <div className="col-sm-6">
//         <div className="card card-view">
//           <div className="card-body">
//             <h5 className="card-title">{this.props.title}</h5>
//             <p>{this.props.body}</p>
//             <button className="btn btn-info">Edit</button>
//             <button className="btn btn-danger">Delete</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
}

export default Note;