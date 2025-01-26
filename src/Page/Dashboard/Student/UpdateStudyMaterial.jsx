import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import DasHeading from "../../../Shared/DashBoardHeading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useNotes from "../../../Hooks/useNotes";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateStudyMaterial = () => {
    
    const {id} = useParams();
    const {note} = useNotes(id);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    useEffect(() => {
        if (note) {
          reset({
            title: note?.title || "",
            note: note?.note || "",
          });
        }
      }, [note, user?.email, reset]);

    const onSubmit = async (data) => {
      const noteData = {
        title: data.title,
        note: data.note,
      };
      const res = await axiosSecure.patch(`/notes/${note._id}`, noteData);
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
          title: `${data.title} is added`,
          background: "#28a745",
          color: "#ffff",
        });
      }
      navigate('/dashboard/mangeNotes')
      reset();
    };
    return (
        <div className="pb-20 pt-8">
        <DasHeading Heading="Update Your Notes"></DasHeading>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body bg-white border border-black max-w-3xl mx-auto p-12 boxFixed rounded-lg"
        >
          <div className="form-control">
            <input
              {...register("email")}
              type="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered placeholder:text-black placeholder:text-xl border border-black mb-3"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <input
              {...register("title")}
              type="text"
              placeholder="Title"
              defaultValue={note?.title}
              className="input input-bordered placeholder:text-black placeholder:opacity-40 border border-black"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              {...register("note")}
              type="text"
              cols="20"
              rows="8"
            //   defaultValue={note?.note}
              placeholder="Note Description...."
              className="textarea textarea-bordered placeholder:text-black placeholder:opacity-40 border border-black mt-2"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-neutral-900 text-white hover:bg-neutral-700">
              Updated Note
            </button>
          </div>
        </form>
      </div>
    );
};

export default UpdateStudyMaterial;