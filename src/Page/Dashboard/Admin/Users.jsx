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
import DataTable from "react-data-table-component";

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
        text: `You won't be able to revert this for ${deleteUser.name}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/users/${deleteUser._id}`);
          if (res.data.deletedCount > 0) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              `${deleteUser.name}'s file has been deleted.`,
              "success"
            );
            refetch();
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  const columns = [
    {
      name: "User Name and Image",
      selector: "name",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="avatar ml-2 md:ml-5 flex items-center gap-2">
            <div className="mask mask-squircle h-12 w-12 md:h-16 md:w-16">
              <img src={row.photoURL} alt={row.name} />
            </div>
            <h1 className="text-sm md:text-base">{row.name}</h1>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "User Email",
      selector: "email",
      cell: (row) => <span className="font-semibold">{row.email}</span>,
      sortable: true,
    },
    {
      name: "User Role",
      selector: "role",
      cell: (row) => (
        <button
          className={`btn text-sm ${
            row.role === "Admin"
              ? "bg-green-500 text-white"
              : row.role === "Tutor"
              ? "bg-yellow-500 text-white"
              : row.role === "Student"
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }`}
        >
          {row.role === "Admin" && <GrUserAdmin className="mr-2" />}
          {row.role === "Tutor" && <FaChalkboardTeacher className="mr-2" />}
          {row.role === "Student" && <PiStudent className="mr-2" />}
          {row.role}
        </button>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => handleDelete(row)}
          className="btn bg-red-500 text-white px-2 md:px-4"
        >
          <FaTrash />
        </button>
      ),
    },
    {
      name: "Update Role",
      cell: (row) => (
        <button
          onClick={() =>
            document.getElementById(`my_modal_${row._id}`).showModal()
          }
          className="btn bg-white text-sm border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 px-2 md:px-4"
        >
          <MdUpdate />
          Update Role
        </button>
      ),
    },
  ];

  return (
    <div>
      <DasHeading
        Heading="All Users"
        subHeading="Manage User Roles and Permissions"
        user={users.length}
      />

      <div className="flex justify-center mb-8">
        <input
          type="text"
          name="search"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="input border border-black w-full max-w-xs rounded-r-none"
        />
        <button className="btn bg-black text-white rounded-l-none border border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300">
          Search
        </button>
      </div>

      {users.length ? (
        <div className="overflow-x-auto px-4 md:px-16 rounded-xl">
          <DataTable
            columns={columns}
            data={users}
            pagination
            highlightOnHover
            pointerOnHover
            customStyles={{
              header: {
                style: {
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '1rem',
                },
              },
              rows: {
                style: {
                  fontSize: '1rem',
                },
              },
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/man-with-vote-paper_24877-76498.jpg"
            alt="No user"
            className="h-40 md:h-72 mb-3"
          />
          <h1 className="text-center text-lg md:text-3xl font-extrabold">
            No User Available
          </h1>
        </div>
      )}

      {/* Update User Modal */}
      {users.map((user) => (
        <UpdateUserModal
          key={user._id}
          user={user}
          refetch={refetch}
        />
      ))}
    </div>
  );
};

export default Users;
