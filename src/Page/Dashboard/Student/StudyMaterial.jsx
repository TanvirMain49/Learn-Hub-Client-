import React from "react";
import DasHeading from "../../../Shared/DashBoardHeading";
import useBooked from "../../../Hooks/useBooked";
import StudyMaterialCard from "./StudyMaterialCard";

const StudyMaterial = () => {
  const { bookedSessions } = useBooked();
  return (
    <div>
      <DasHeading Heading="Get Study Material" subHeading="Discover Study Content"></DasHeading>
      <div className="grid grid-cols-3 gap-6 px-10">
        {bookedSessions.map((session) => (
          <StudyMaterialCard
            session={session}
            key={session._id}
          ></StudyMaterialCard>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterial;


{/* <div className="card bg-black text-white w-96">
<div className="card-body">
  <h2 className="card-title text-3xl mb-2">{session.title}</h2>
</div>
<div>
  <button className="btn m-2" onClick={()=>document.getElementById(`my_modal_${session._id}`).showModal()}>
      view Material
  </button>
</div>
  <NoteModal note={session} noteId={session._id}></NoteModal>
</div> */}