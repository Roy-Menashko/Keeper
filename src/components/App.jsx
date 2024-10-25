import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {

  const [list , setList] = useState([])
  const [note , setNote] = useState({title: "" , content : ""})

  function addItem(){
    setList(prevValue => {
      return [...prevValue , note]
    })
    console.log(list)
    setNote({ title: "", content: "" });
  }

  function updateNote(updatedField) {
    setNote((prevNote) => ({
      ...prevNote,       
      ...updatedField,   
    }));
  }

  function deleteNote(id) {
    setList((prevList) => {
      return prevList.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addItem = {addItem} updateNote = {updateNote} note = {note}/>
      {list.map((note, index) => (
  <Note
    key={index}
    id={index}
    title={note.title}
    content={note.content}
    deleteNote={deleteNote}
  />
))}
      <Footer />
    </div>
  );
}

export default App;
