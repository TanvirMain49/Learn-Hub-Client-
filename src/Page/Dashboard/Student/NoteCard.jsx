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
      <div className="flex items-center gap-3 justify-center mb-6">
        <button className="btn text-lg font-bold hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-300 hover:scale-105" onClick={()=>document.getElementById(`my_modal_${note._id}`).showModal()}>
            view all 
        </button>
        <Link to={`${note._id}`} className="btn text-lg font-bold hover:bg-green-500 hover:text-white transition-all ease-in-out duration-300 hover:scale-105">Update</Link>
        <button className="btn text-lg font-bold hover:bg-red-500 hover:text-white transition-all ease-in-out duration-300 hover:scale-105">Delete</button>
      </div>
        <NoteModal note={note} noteId={note._id}></NoteModal>
    </div>
  );
};

export default NoteCard;
