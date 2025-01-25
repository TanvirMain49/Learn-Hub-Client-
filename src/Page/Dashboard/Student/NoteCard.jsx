import React from "react";
import { Link } from "react-router-dom";
import NoteModal from "./NoteModal";

const NoteCard = ({ note }) => {
  console.log(note);
  return (
    <div className="card bg-black text-white w-96">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-2">{note.title}</h2>
        <p className="text-gray-300">{note.note.substring(0, 60)}<Link className="text-blue-600">.....see more</Link></p>
      </div>
      <div>
        <button className="btn m-2" onClick={()=>document.getElementById(`my_modal_${note._id}`).showModal()}>
            view all 
        </button>
        <Link to={`${note._id}`} className="btn">Update</Link>
        <button className="btn">Delete</button>
      </div>
        <NoteModal note={note} noteId={note._id}></NoteModal>
    </div>
  );
};

export default NoteCard;
