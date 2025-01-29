import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateSessionStatus = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [status, setStatus] = useState(item.status);
  const [price, setPrice] = useState("0");
  const [feedback, setFeedback] = useState("");

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);

    if (newStatus !== "success") setPrice("0");
    if (newStatus !== "rejected") setFeedback("");
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const updatedDoc = {
      status: status,
      ...(status === "success" && { price: price }),
      ...(status === "rejected" && { feedback: feedback }),
    };

    const res = await axiosSecure.patch(`/session/${item._id}`, updatedDoc);
    if (res.data.modifiedCount > 0) {
      document.getElementById(`my_modal_${item._id}`).close();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${item.title} has been ${status}`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  return (
    <div>
      <dialog id={`my_modal_${item._id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-white boxFixed rounded-lg">
          <h3 className="font-bold text-2xl text-center text-gray-800 mb-4">
            Review Session Status
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Select the appropriate status for this session. You can also set a
            price if necessary.
          </p>

          {/* Price Input Section */}
          <div className="mb-6">
            <label
              htmlFor={`price_${item._id}`}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Set Session Price (select success to set the price)
            </label>
            <input
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              disabled={status !== "success"}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none transition-all ${
                status === "success"
                  ? "border-blue-500 focus:ring-2 focus:ring-blue-300"
                  : "border-gray-300 bg-gray-100 cursor-not-allowed"
              }`}
            />
            {/* Helper Text */}
            {status !== "success" && (
              <p className="text-xs text-gray-500 mt-1">
                Price cannot be set unless the session is approved.
              </p>
            )}
          </div>

          {/* Status Select Section */}
          <div className="mb-6">
            <label
              htmlFor={`status_${item._id}`}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Session Status
            </label>
            <select
              value={status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            >
              <option value="pending">Pending</option>
              <option value="success">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Feedback Section for Rejected Status */}
          {status === "rejected" && (
            <div className="form-control">
              <p className="text-sm transition-all ease-in-out duration-300">
                Give Feedback on This Session
              </p>
              <textarea
                name="rejected"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                cols="10"
                rows="10"
                placeholder="Feedback...."
                className="textarea textarea-bordered placeholder:text-black placeholder:opacity-40 border border-black mt-2"
                required
              />
            </div>
          )}

          <form onSubmit={handelSubmit}>
            <button
              type="submit"
              className="btn bg-gray-800 text-white hover:bg-gray-600 px-4 py-2 rounded-lg"
            >
              Done
            </button>
          </form>

          {/* Modal Actions */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-gray-800 text-white hover:bg-gray-600 px-4 py-2 rounded-lg">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateSessionStatus;
