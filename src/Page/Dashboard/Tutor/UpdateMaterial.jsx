import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useMaterialById from "../../../Hooks/useMetarilaById";


const UpdateMaterial = () => {
  const {id} = useParams();
  const {item} = useMaterialById(id);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const imageUrl = { image: data.image[0] };
    
    const imgData = new FormData()
    imgData.append("file", imageUrl.image);
    imgData.append('upload_preset', "Learn_Hub")
    imgData.append("cloud_name", "dvrn5hqsv")

    const imgRes = await axiosPublic.post(
      "https://api.cloudinary.com/v1_1/dvrn5hqsv/image/upload",
      imgData);
    if (imgRes.data.secure_url) {
      const material = {
        sessionId: item?.sessionId,
        email: user?.email,
        image: imgRes.data.secure_url,
        doc: data.doc,
      };

      const res = await axiosSecure.patch(`/materials/${item?.sessionId}`, material);
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
      setLoader(false);
      reset();
      navigate('/dashboard/allMaterials');
    }
  };


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
              {item?.title}
            </h3>
            <h3 className="font-bold text-lg">
              <span className="text-blue-500 border-l-4 border-black pl-1">
                Session Id:
              </span>{" "}
              {item?.sessionId}
            </h3>

            <h3 className="font-bold text-lg">
              <span className="text-blue-500 border-l-4 border-black pl-1">
                Tutor Email:
              </span>{" "}
              {item?.tutorEmail}
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
              {loader ? <span className="loading loading-dots loading-xs"></span>: "Update Material"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateMaterial;
