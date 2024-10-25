import React from "react";


function CreateArea(props) {
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={props.note.title} onChange={(event) => {
          props.updateNote({ [event.target.name]: event.target.value });
        }}/>
        <textarea name="content" placeholder="Take a note..." rows="3" 
        value={props.note.content} onChange={(event) => {
          props.updateNote({ [event.target.name]: event.target.value });
        }}/>
        <button onClick={(event) => {
          event.preventDefault();
          props.addItem();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
