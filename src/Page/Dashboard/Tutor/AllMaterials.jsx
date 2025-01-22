import React from "react";
import usePersonalSession from "../../../Hooks/usePersonalSession";
import UpdateModal from "./UpdateModal";

const AllMaterials = () => {
    const {items} = usePersonalSession();
  return (
    <>
      <h1 className="text-5xl font-bold text-center">Manage All Materials</h1>
      <p className="text-base text-center font-normal mt-3 mb-8 max-w-4xl mx-auto">
      Easily view, update, and organize all your session resources in one place. Keep your materials up to date, ensuring your students always have access to the latest and most relevant content for their learning.
      </p>
        <div className="grid grid-cols-3 gap-6">
            {
                items.map(item=>(
                    <div className="card w-96 bg-white border border-gray-950 transition-all duration-300 ease-out mb-8 box">
                    <figure className="rounded-t-xl w-full h-78">
                      <img
                        src={item.imageUrl}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </figure>
                    <div className="p-6">
                      <div className="flex justify-between items-center">
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
                      <div className="flex justify-between items-center my-4">
                        <button
                          onClick={() => document.getElementById("my_modal_2").showModal()}
                          className="flex items-center btn font-bold text-base border border-green-500 text-green-500 hover:bg-green-600 hover:text-white transition-all ease-in-out duration-300"
                        >
                          Update Material
                        </button>
                        <button
                          onClick={() => document.getElementById("my_modal_2").showModal()}
                          className="flex items-center btn font-bold text-base border border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300"
                        >
                          Delete material
                        </button>
                      </div>
                    </div>
              
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                      <UpdateModal item={item}></UpdateModal>
                  </div>
                ))
            }
        </div>

    </>
  );
};

export default AllMaterials;
