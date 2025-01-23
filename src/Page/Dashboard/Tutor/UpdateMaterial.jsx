import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useNavigate } from "react-router-dom";

const imgApi = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_Imge_Key
}`;

const UpdateMaterial = () => {
  const item = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    data: material,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["material", user?.email],
    queryFn: async () => {
      const req = await axiosSecure.get(
        `/materials/${user?.email}?id=${item._id}`
      );
      return req.data;
    },
  });

  console.log(material);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageUrl = { image: data.image[0] };
    const imgRes = await axiosPublic.post(imgApi, imageUrl, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (imgRes.data.success) {
      const material = {
        sessionId: item._id,
        email: user?.email,
        image: imgRes.data?.data?.display_url,
        doc: data.doc,
      };

      const res = await axiosSecure.patch(`/materials/${item._id}`, material);

      if (res.data.modifiedCount > 0) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: `${item.title} is updated`,
          background: "#28a745",
          color: "#ffff",
        });
      }
      reset();
      navigate('/dashboard/allMaterials');
    }
  };

  if(isLoading){
    <h2>Loading..</h2>
  }

  return (
    <>
      <div>
        <form
          className="card-body border border-black max-w-4xl mx-auto p-12 boxFixed rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-bold mb-8 text-center">
            Update Your Material
          </h1>

          {/* Info section */}
          <div className=" flex flex-col">
            <h3 className="font-bold text-lg">
              <span className="text-blue-500 border-l-4 border-black pl-1">
                Session Name:
              </span>{" "}
              {item.title}
            </h3>
            <h3 className="font-bold text-lg">
              <span className="text-blue-500 border-l-4 border-black pl-1">
                Session Id:
              </span>{" "}
              {item._id}
            </h3>

            <h3 className="font-bold text-lg">
              <span className="text-blue-500 border-l-4 border-black pl-1">
                Tutor Email:
              </span>{" "}
              {item.tutorEmail}
            </h3>
          </div>

          {/* Material input section */}

          {/* Image section */}
          <div className="form-control">
            <label htmlFor="image" className="label font-semibold text-center">
              Session Image
            </label>
            <input
              {...register("image")}
              type="file"
              accept="image/*"
              required
              className="file-input file-input-bordered border-black w-full"
            />
          </div>

          {/* Google Drive link */}
          <div className="form-control mb-8">
            <label htmlFor="doc" className="label font-semibold text-center">
              Google Drive Link
            </label>
            <input
              {...register("doc")}
              type="text"
              placeholder="Google Drive Link..."
              required
              className="input input-bordered border-black w-full"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center items-center mt-8">
            <button
              type="submit"
              className="flex items-center btn font-bold text-base border border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300"
            >
              Update Material
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateMaterial;
