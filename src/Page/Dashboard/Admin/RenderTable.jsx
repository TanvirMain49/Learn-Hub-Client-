import React from "react";
import DataTable from "react-data-table-component";
import UpdateRole from "./UpdateRole";

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "black",
      color: "white",
    },
  },
  table: {
    style: {
      padding: "16px",
    },
  },
};

const RenderTable = ({ cards, status, refetch }) => {
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "70px",
    },
    {
      name: "Image",
      cell: (row) => (
        <div className="h-12 w-12 md:h-16 md:w-16 rounded-md overflow-hidden">
          <img src={row.imageUrl} alt="session" className="w-full h-full object-cover" />
        </div>
      ),
    },
    {
      name: "Session",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Tutor Name",
      selector: (row) => row.tutorName,
      sortable: true,
    },
    {
      name: "Tutor Email",
      selector: (row) => row.tutorEmail,
    },
    {
      name: "Price",
      cell: (row) => (
        row.price === "0" ? (
          <h2 className="text-green-500 font-bold">Free</h2>
        ) : (
          <h2 className="font-bold">${row.price}</h2>
        )
      ),
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="flex items-center justify-between">
          <button
            onClick={() => document.getElementById(`my_modal_${row._id}`).showModal()}
            className={`hover:text-white px-3 py-2 rounded font-bold border transition-all ease-in-out duration-300 ${
              row.status === "pending"
                ? "border-yellow-500 text-yellow-500 hover:bg-yellow-400"
                : row.status === "success"
                ? "border-green-500 text-green-500 hover:bg-green-400"
                : "border-red-500 text-red-500 hover:bg-red-400"
            }`}
          >
            {row.status}
          </button>
          <UpdateRole item={row} refetch={refetch}/>
        </div>
      ),
      sortable: true,
    },
  ];

  return (
<div className="mb-10 p-4 overflow-x-auto">
  <h2
    className={`text-xl font-bold mb-4 capitalize text-center ${
      status === "pending"
        ? "text-yellow-500"
        : status === "success"
        ? "text-green-500"
        : "text-red-500"
    }`}
  >
    {status} Sessions: ({cards.length})
  </h2>

  <div className="overflow-x-auto">
    <DataTable
      columns={columns}
      data={cards}
      pagination
      highlightOnHover
      responsive
      customStyles={customStyles}
    />
  </div>
</div>

  );
};

export default RenderTable;
