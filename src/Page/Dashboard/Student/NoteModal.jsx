import React from 'react';

const NoteModal = ({note, noteId}) => {
    console.log("note",note);
    return (
<dialog id={`my_modal_${noteId}`} className="modal ">
  <div className="modal-box w-11/12 max-w-5xl text-black">
    <h3 className="font-extrabold text-3xl text-blue-800">{note.title}</h3>
    <p className="py-4 text-lg">{note.note}</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    );
};

export default NoteModal;