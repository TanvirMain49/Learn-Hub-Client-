import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import DasHeading from "../../../Shared/DashBoardHeading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useNotes from "../../../Hooks/useNotes";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateStudyMaterial = () => {
  const { id } = useParams();
  const { note } = useNotes(id);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (note) {
      reset({
        title: note?.title || "",
        note: note?.note || "",
      });
    }
  }, [note, reset]);

  const onSubmit = async (data) => {
    const noteData = {
      title: data.title,
      note: data.note,
    };

    try {
      const res = await axiosSecure.patch(`/notes/${note._id}`, noteData);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Note updated successfully!",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        navigate("/dashboard/mangeNotes");
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to update note",
          text: "Please try again later.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="pb-20 pt-8 px-4 sm:px-6 lg:px-8">
      <DasHeading Heading="Update Your Notes" subHeading="Update what need to be"/>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-white border border-black max-w-md sm:max-w-xl lg:max-w-3xl mx-auto p-6 sm:p-12 rounded-lg"
      >
        <div className="form-control mb-4">
          <label htmlFor="title" className="text-base font-medium mb-1">
            Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            id="title"
            placeholder="Title"
            className={`input input-bordered placeholder:text-black placeholder:opacity-40 border ${
              errors.title ? "border-red-500" : "border-black"
            }`}
          />
          {errors.title && (
            <span className="text-sm text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div className="form-control mb-4">
          <label htmlFor="note" className="text-base font-medium mb-1">
            Note Description
          </label>
          <textarea
            {...register("note", { required: "Note description is required" })}
            id="note"
            rows="8"
            placeholder="Note Description..."
            className={`textarea textarea-bordered placeholder:text-black placeholder:opacity-40 border ${
              errors.note ? "border-red-500" : "border-black"
            }`}
          />
          {errors.note && (
            <span className="text-sm text-red-500">{errors.note.message}</span>
          )}
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className={`btn bg-neutral-900 text-white hover:bg-neutral-700 ${
              isSubmitting ? "loading" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Note"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateStudyMaterial;
