import React from "react";
import { Link } from "react-router-dom";
import NoteModal from "./NoteModal";
import { GrUpdate } from "react-icons/gr";
import { FaList } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

const NoteCard = ({ note }) => {
  console.log(note);
  return (
    <div className="card bg-white text-black border border-black box transition-all duration-300 ease-in-out hover:border-none">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-2">{note?.title}</h2>
        <p className="text-black">
          {note?.note.substring(0, 60)}
          <button
            onClick={() =>
              document.getElementById(`my_modal_${note._id}`).showModal()
            }
            className="text-blue-600"
          >
            .....see more
          </button>
        </p>
      </div>
      <div className="flex items-center gap-3 justify-center mb-6">
        <button
          className="btn text-base font-bold hover:bg-black bg-white border border-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105"
          onClick={() =>
            document.getElementById(`my_modal_${note._id}`).showModal()
          }
        >
          <FaList></FaList>
          View
        </button>
        <Link
          to={`/dashboard/updateNotes/${note._id}`}
          className="btn text-base bg-white border-black border font-bold hover:bg-green-500 hover:text-white transition-all ease-in-out duration-300 hover:scale-105"
        > 
        <GrUpdate className="font-extrabold"></GrUpdate>
          Update
        </Link>
        <button className="btn text-base font-bold bg-white border border-black hover:bg-red-500 hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
          <FaTrashAlt></FaTrashAlt>
          Delete
        </button>
      </div>
      <NoteModal note={note} noteId={note._id}></NoteModal>
    </div>
  );
};

export default NoteCard;
