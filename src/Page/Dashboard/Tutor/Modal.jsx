import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const imgApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Imge_Key}`;

const Modal = ({ item }) => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

     const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        console.log(data);
        const imageUrl = {image: data.image[0]};
        console.log(imageUrl);
        const imgRes = await axiosPublic.post(imgApi, imageUrl, {
            headers:{
                "content-type": "multipart/form-data"
            },
        })
        console.log(imgRes.data);
        if(imgRes.data.success){
            const material = {
                doc : data.doc,
                image: imgRes.data?.data?.display_url
            }
            const res = await axiosSecure.post('/materials', material)
            console.log(res.data);
            document.getElementById("my_modal_3").close()
        }

      }

  return (
    <dialog id="my_modal_3" className="modal">
      <form className="modal-box max-w-3xl" onSubmit={handleSubmit(onSubmit)}>
        {/* Close button */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById("my_modal_3").close()}
        >
          ✕
        </button>

        {/* Material text */}
        <div className="space-y-3 text-left">
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
        <h1 className="text-2xl font-bold mt-8 text-center">
          Upload Your Material
        </h1>

        {/* Image section */}
        <div className="form-control">
          <label htmlFor="image" className="label font-semibold text-center">
            Session Image
          </label>
          <input
            {...register("image")}
            type="file"
            accept="image/*"
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
    </dialog>
  );
};

export default Modal;
