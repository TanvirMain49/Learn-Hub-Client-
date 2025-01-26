import React, { useState } from "react";
import DasHeading from "../../../Shared/DashBoardHeading";
import useUser from "../../../Hooks/useUser";
import { FaTrash } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { MdUpdate } from "react-icons/md";
import UpdateUserModal from "./UpdateUserModal";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Users = () => {
  const [search, setSearch] = useState("");
  const { users, refetch } = useUser(search);
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (deleteUser) => {
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
        text: `You won't be able ${deleteUser.name}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/users/${deleteUser._id}`);
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: `${deleteUser.name} file has been deleted.`,
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
    <div>
      <DasHeading
        Heading=" All Users"
        subHeading="Manage User Roles and Permissions"
        user={users.length}
      ></DasHeading>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          name="search"
          placeholder="Search here here"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="input border border-black w-full max-w-xs rounded-r-none"
        />
        <button className="btn bg-black text-white rounded-l-none border border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300">
          Search
        </button>
      </div>

      {users.length ? (
        <div className="overflow-x-auto px-16 rounded-xl">
          <table className="table">
            {/* head */}
            <thead className="text-center text-base bg-black text-white">
              <tr>
                <th className="text-left pl-14">User Name and Image</th>
                <th>User Email</th>
                <th>User Role</th>
                <th>Action</th>
                <th>Update Role</th>
              </tr>
            </thead>
            <tbody className="text-center text-base bg-white">
              {users.map((user) => (
                <tr className="border border-black">
                  <td>
                    <div className="flex justify-left items-center gap-3">
                      <div className="avatar ml-5 flex items-center gap-2">
                        <div className="mask mask-squircle h-16 w-16">
                          <img src={user.photoURL} alt={user.name} />
                        </div>
                        <h1>{user.name}</h1>
                      </div>
                      <div></div>
                    </div>
                  </td>
                  <td className="font-semibold">{user.email}</td>
                  <td className="font-semibold flex items-center justify-center mt-1">
                    <button
                      className={`btn text-base ${
                        user.role === "Admin"
                          ? "bg-green-500 text-white"
                          : user.role === "Tutor"
                          ? "bg-yellow-500 text-white"
                          : user.role === "Student"
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {user.role === "Admin" && (
                        <GrUserAdmin className="mr-2" />
                      )}
                      {user.role === "Tutor" && (
                        <FaChalkboardTeacher className="mr-2" />
                      )}
                      {user.role === "Student" && (
                        <PiStudent className="mr-2" />
                      )}
                      {user.role}
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn bg-red-500 text-white"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                  <td className="font-semibold">
                    <button
                      onClick={() =>
                        document
                          .getElementById(`my_modal_${user._id}`)
                          .showModal()
                      }
                      className="btn bg-white text-base border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                    >
                      <MdUpdate></MdUpdate>
                      Update Role
                    </button>
                  </td>
                  <UpdateUserModal
                    key={user._id}
                    user={user}
                    refetch={refetch}
                  ></UpdateUserModal>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/man-with-vote-paper_24877-76498.jpg?t=st=1737928040~exp=1737931640~hmac=0ab75571454d797f1f2c01afffb6f6c474b5723de3189e60942f2300eac9dc47&w=740"
            alt="No user" className="h-72 mb-3"
          />
          <h1 className="text-center text-3xl font-extrabold">
            No User Available
          </h1>
        </div>
      )}
    </div>
  );
};

export default Users;
