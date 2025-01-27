import React from "react";
import { FaLink, FaTrash } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMaterialCard from "../../../Hooks/useMaterialCard";
import Swal from "sweetalert2";

const ViewMaterialCard = ({ material}) => {
    const { refetch } = useMaterialCard();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ml-6 text-white",
        cancelButton: "btn btn-danger ",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/AdminMaterials/${id}`);
          if (res.data.deletedCount > 0) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your session is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="card bg-white shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105 duration-300 ease-out mb-8 flex flex-col overflow-hidden">
      <img
        src={material.imageUrl}
        alt={material.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-col justify-between flex-grow">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {material.title}
          </h1>
          <div className="my-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Material Details:
            </h2>
            <a
              href={material.doc}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 font-medium hover:underline mb-3"
            >
              <FaLink className="mr-2 text-blue-500" />
              Google Drive Link
            </a>
            <a
              href={material.image}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-800 font-medium hover:underline"
            >
              <MdOutlineFileDownload className="mr-2 text-green-500 text-xl" />
              Download Image
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => handleDelete(material._id)}
            className="w-full flex items-center btn font-bold text-base bg-black text-white hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300"
          >
            <FaTrash></FaTrash>
            Delete Material
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewMaterialCard;
