import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UpdateUserModal = ({ user, refetch }) => {

  const axiosSecure = useAxiosSecure();

  const handleRoleChange = (role) => {

    const modal = document.getElementById(`my_modal_${user._id}`);
    modal.close();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success text-white ml-2",
        cancelButton: "btn bg-red-500 text-white",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `Are you sure you want to update the role to ${role}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(`users/${user._id}`, {role: role});
          if (res.data.modifiedCount > 0) {
            swalWithBootstrapButtons.fire({
              title: "Updated!",
              text: `${user.name} is ${role} now!.`,
              icon: "success",
            });
            refetch();
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="bg-white">
      <dialog id={`my_modal_${user._id}`} className="modal boxFixed">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="p-16">
            <h2 className="text-2xl font-bold text-center mb-6">
              Which Role Do You Want to Update?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                className={`btn bg-white text-base border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 px-4 py-2 rounded-lg`}
                disabled={user.role === 'Student'}
                onClick={() => handleRoleChange("Student")}
              >
                Student
              </button>
              <button
                className={`btn bg-white text-base border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 px-4 py-2 rounded-lg`}
                disabled={user.role === 'Admin'}
                onClick={() => handleRoleChange("Admin")}
              >
                Admin
              </button>
              <button
                className={`btn bg-white text-base border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 px-4 py-2 rounded-lg`}
                disabled={user.role === 'Tutor'}
                onClick={() => handleRoleChange("Tutor")}
              >
                Tutor
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateUserModal;
