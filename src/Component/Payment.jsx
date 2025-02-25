import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function Payment() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("https://learn-hub2.vercel.app/payment")
      .then((response) => response.json())
      .then((data) => setPayments(data));
  }, []);

  const columns = [
    { name: "ID", selector: (row) => row._id, sortable: true },
    { name: "Name", selector: (row) => row?.name, sortable: true },
    { name: "Amount", selector: (row) => `$${row.price}`, sortable: true },
    { name: "Date", selector: (row) => new Date(row.date).toLocaleDateString(), sortable: true },
  ];

  const customStyles = {
    table: {
      style: {
        borderRadius: "12px", // Rounded corners
        overflow: "hidden", // Ensures rounding applies correctly
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
        textAlign: "center",
      },
    },
    cells: {
      style: {
        padding: "12px",
      },
    },
  };
  

  return (
    <div className="my-10 md:mx-auto md:max-w-8xl max-w-lg shadow-lg">
        <h1 className="text-lg font-bold ml-4 dark:text-white/80">Payment</h1>
      <DataTable
        columns={columns}
        data={payments}
        pagination
        paginationPerPage={5} 
        paginationRowsPerPageOptions={[5, 10]}
        customStyles={customStyles}
        className="md:p-6 dark:bg-neutral-700" 
      />
    </div>
  );
}
