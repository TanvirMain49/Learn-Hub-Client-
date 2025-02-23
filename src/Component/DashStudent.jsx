import React, { useEffect } from "react";
import useUser from "../Hooks/useUser";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import DataTable from "react-data-table-component";

export default function DashStudent({ setTotalStudent }) {
  const { users, refetch } = useUser();

  const students = users.filter((user) => user.role === "Student");

  useEffect(() => {
    setTotalStudent(students.length);
  }, [students.length, setTotalStudent]);

  const columns = [
    {
      name: "Serial",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Photo",
      selector: (row) => row.photoURL,
      cell: (row) => (
        <div className="w-12 h-12 rounded-xl overflow-hidden">
          <img
            src={row.photoURL}
            alt={row.name}
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => <span className="font-semibold">{row.name}</span>,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => <span>{row.email}</span>,
    },
  ];

  const customStyles = {
    table: {
      style: {
        borderRadius: "12px",
        overflow: "hidden",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#000",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "16px",
        textAlign: "center",
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        textAlign: "center",
      },
    },
    cells: {
      style: {
        padding: "12px",
        fontWeight: "bold",
      },
    },
  };

  return (
    <div className="overflow-x-auto md:w-[54%] w-full rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-5">🎓 Student</h2>
      <DataTable
        columns={columns}
        data={students}
        pagination
        highlightOnHover
        pointerOnHover
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15]}
        customStyles={customStyles}
      />
    </div>
  );
}
