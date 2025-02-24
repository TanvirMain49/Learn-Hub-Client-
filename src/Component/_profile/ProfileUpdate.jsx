import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

export default function ProfileUpdate({ user, refetch }) {
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      userName: e.target.userName.value,
      email: e.target.email.value,
      address: e.target.address.value,
      city: e.target.city.value,
      country: e.target.country.value,
    };

    try {
      const response = await axiosSecure.put(
        `/userPfp/${user?.email}`,
        formData
      );
      if (response.status === 200) {
        const modal = document.getElementById(
          `my_modal_${user?._id}`
        );
        modal.close();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Information updated successfully!",
          confirmButtonColor: "#0000",
        });
        refetch();
      } else {
        const modal = document.getElementById(
          `my_modal_${user?._id}`
        );
        modal.close();
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to update information!",
          confirmButtonColor: "#000",
        });
      }
    } catch (error) {
      const modal = document.getElementById(
        `my_modal_${user?._id}`
      );
      modal.close();
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong!",
        confirmButtonColor: "#7B1E1E",
      });
    }
  };

  return (
    <div>
      <dialog id={`my_modal_${user?._id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Your Information</h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-bold">User ID</label>
              <input
                type="text"
                name="userId"
                value={user?._id || ""}
                disabled
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-bold">User Name</label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.name || ""}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-bold">Email Address</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email || ""}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-bold">Address</label>
              <input
                type="text"
                name="address"
                defaultValue={user?.address || ""}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-bold">City</label>
              <input
                type="text"
                name="city"
                defaultValue={user?.city || ""}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-bold">Country</label>
              <input
                type="text"
                name="country"
                defaultValue={user?.country || ""}
                className="input input-bordered w-full"
              />
            </div>
            <div className="modal-action col-span-2">
              <button type="submit" className="btn bg-black text-white">
                Save
              </button>
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
