import React from "react";
import usePersonalSession from "../../../Hooks/usePersonalSession";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import DasHeading from "../../../Shared/DashBoardHeading";

const AllMaterials = () => {
  const { items, refetch } = usePersonalSession();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    console.log(id);
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
          const res = await axiosSecure.delete(`/materials/${id}`);
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
    <>
      <DasHeading
        Heading=" Manage Your Material"
        subHeading="Organize Your Material"
      ></DasHeading>
      <div className="w-11/12 mx-auto grid grid-cols-3 space-x-12">
        {items.map((item) => (
          <div className="card w-96 bg-white border border-gray-950 transition-all duration-300 ease-out mb-8 box grow flex flex-col">
            <img
              src={item.imageUrl}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between ">
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <div className="flex justify-between items-center mb-2">
                  {item.status == "pending" && (
                    <h2 className="border border-black px-1 rounded font-semibold text-white bg-yellow-500 smooch-sans">
                      {item.status}
                    </h2>
                  )}
                  {item.status == "success" && (
                    <h2 className="border border-black px-1 rounded font-semibold text-white bg-green-500 smooch-sans">
                      {item.status}
                    </h2>
                  )}
                  {item.status == "rejected" && (
                    <h2 className="border border-black px-1 rounded font-semibold text-white bg-red-500 smooch-sans">
                      {item.status}
                    </h2>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center my-4 flex-grow">
                <Link
                  to={`/dashboard/updateMaterial/${item._id}`}
                  className="flex items-center btn font-bold text-base bg-white border border-black  text-black hover:bg-green-600 hover:text-white transition-all ease-in-out duration-300"
                >
                  Update Material
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex items-center btn font-bold text-base bg-black text-white hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300"
                >
                  Delete material
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllMaterials;
