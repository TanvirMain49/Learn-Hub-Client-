import React from "react";
import { useLoaderData } from "react-router-dom";

const NoteDetails = () => {
  const note = useLoaderData();
  console.log(note);

  return (
    <div>
      <div className="modal-box w-11/12 max-w-5xl text-black">
      </div>
    </div>
  );
};

export default NoteDetails;
