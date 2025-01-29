import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useSessionById from "../../../Hooks/useSessionbyId";
import Loader from "../../../Shared/Loader";

const AddMaterial = () => {
  const {id} = useParams();
  const {item} = useSessionById(id);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const imageUrl = { image: data.image[0] };

      const imgData = new FormData();
      imgData.append("file", imageUrl.image);
      imgData.append('upload_preset', "Learn_Hub")
      imgData.append("cloud_name", "dvrn5hqsv")

      const imgRes = await axiosPublic.post( "https://api.cloudinary.com/v1_1/dvrn5hqsv/image/upload", imgData);
      if (imgRes.data.secure_url) {
        const material = {
          title: item?.title,
          imageUrl: item?.imageUrl,
          sessionId: item?._id,
          email: user?.email,
          doc: data.doc,
          image: imgRes.data.secure_url,
        };
        const res = await axiosSecure.post(
          `/materials?email=${user?.email}&id=${item?._id}`,
          material
        )
        console.log(res.data);
        if (res.data.insertedId > "0") {
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
            title: `${item?.title} is added`,
            background: "#28a745",
            color: "#ffff",
          });
            reset();
          navigate('/dashboard/materials')
        }
      }
    } catch (error) {
      if (error.response?.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Duplicate Entry",
          text: "This material already exists in the database.",
          background: "#dc3545",
          color: "#ffff",
          confirmButtonColor: "#000000",
          confirmButtonText: '<span style="color: white;">OK</span>',
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An unexpected error occurred. Please try again.",
          background: "#dc3545",
          color: "#ffff",
          confirmButtonColor: "#000000",
          confirmButtonText: '<span style="color: white;">OK</span>',
        });
      }
    }
    finally {
      setLoading(false); 
      navigate('/dashboard/materials');
    }
  };
  
  return (
    <>
      <form
        className="card-body border border-black max-w-4xl mx-auto md:p-12 boxFixed rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-bold mb-8 text-center">
          Upload Your Material
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
            {item?._id}
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
            className="bg-white font-bold text-base border border-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 btn"
          > {loading ? <span className="loading loading-dots loading-xs"></span> : "Add Material"}
            
          </button>
        </div>
      </form>
    </>
  );
};

export default AddMaterial;
