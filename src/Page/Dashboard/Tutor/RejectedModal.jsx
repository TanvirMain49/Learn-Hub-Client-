import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const RejectedModal = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleRequest = async () => {
    const res = await axiosSecure.patch(`sessionReq/${item._id}`, {
      status: "pending",
    });

    if (res.data.updatedCount > 0) {
      Swal.fire({
        title: "Your Request has been sent!",
        icon: "success",
        draggable: true,
      });
    }
    const modal = document.getElementById(`my_modal_${item._id}`);
    modal.close();
    refetch();
  };

  return (
    <div>
      <dialog id={`my_modal_${item._id}`} className="modal">
        <div className="modal-box roboto">
          <h3 className="font-bold text-xl">Admin Feedback</h3>
          <p className="py-4 text-red-500">{item.feedback}</p>
          <button
            onClick={handleRequest}
            className="btn bg-black text-white mt-4"
          >
            Reapply
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default RejectedModal;
