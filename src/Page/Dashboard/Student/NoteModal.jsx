import React from "react";

const NoteModal = ({ note, noteId }) => {
  return (
    <dialog id={`my_modal_${noteId}`} className="modal ">
      <div className="modal-box w-11/12 max-w-5xl text-black border-black border boxFixed">
        <h3 className="font-extrabold text-3xl text-blue-800">{note.title}</h3>
        <p className="py-4 text-lg">{note.note}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-white font-bold text-xl border border-black hover:bg-red-500 hover:text-white transition-all ease-in-out duration-300">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default NoteModal;
