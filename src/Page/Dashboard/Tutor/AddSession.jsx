import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const imgApiKey = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_Imge_Key
}`;

const AddSession = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [resStart, setResStart] = useState(new Date());
  const [resEnd, setResEnd] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // Prepare form data for both session and tutor images
    const sessionImageFile = { image: data.image[0] };  // Session image
    try {
      // Upload session image
      const sessionImageRes = await axiosPublic.post(imgApiKey, sessionImageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (sessionImageRes.data.success) {
        const sessionInfo = {
          title: data.title,
          classStart: data.classStart,
          classEnd: data.classEnd,
          status: "pending",
          imageUrl: sessionImageRes.data.data.url,  // Session image URL
          tutorImageUrl: data.tutorImage, 
          registerStart: resStart.toISOString().split("T")[0],  // Format the date
          registerEnd: resEnd.toISOString().split("T")[0],  // Format the date
          tutorName: data.tutorName,
          tutorEmail: data.tutorEmail,
          tutorPro: data.tutorPro,
          tutorDescription: data.tutorDescription,
        };
        // post in the server side  
        const sessionRes = await axiosPublic.post('/session', sessionInfo);
        //data is inserted at mongodb
        if(sessionRes.data.insertedId){
            const Toast = Swal.mixin({
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: `${sessionInfo.title} session added`,
              });
        }
        reset();
      }
    } catch (error) {
      console.error("Error uploading images: ", error);
    }
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Add a New Session</h1>
      <p className="text-base text-center font-normal mt-3 mb-8 max-w-4xl mx-auto">
        Plan and schedule study sessions with ease. Add essential details, set
        timings, and ensure a well-structured learning experience for all
        participants.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border border-black max-w-4xl mx-auto p-12 boxFixed rounded-lg grid grid-cols-2 gap-3"
      >
        {/* Session Details Section */}
        <div className="form-control">
          <label htmlFor="title" className="label font-semibold">
            Session Title
          </label>
          <input
            {...register("title")}
            type="text"
            id="title"
            placeholder="Session Title"
            className="input input-bordered border border-black"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="image" className="label font-semibold">
            Session Image
          </label>
          <input
            {...register("image")}
            type="file"
            className="file-input file-input-bordered border-black w-full"
          />
        </div>
        <div className="form-control">
          <label htmlFor="registerStart" className="label font-semibold">
            Registration Start
          </label>
          <DatePicker
            selected={resStart}
            onChange={(date) => setResStart(date)}
            className="input input-bordered border border-black w-full"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="registerEnd" className="label font-semibold">
            Registration End
          </label>
          <DatePicker
            selected={resEnd}
            onChange={(date) => setResEnd(date)}
            className="input input-bordered border border-black w-full"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="classStart" className="label font-semibold">
            Class Start Time
          </label>
          <input
            {...register("classStart")}
            type="text"
            id="classStart"
            placeholder="Class Start Time"
            className="input input-bordered border border-black"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="classEnd" className="label font-semibold">
            Class End Time
          </label>
          <input
            {...register("classEnd")}
            type="text"
            id="classEnd"
            placeholder="Class End Time"
            className="input input-bordered border border-black"
            required
          />
        </div>
        <div className="form-control col-span-2">
          <label htmlFor="description" className="label font-semibold">
            Session Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            cols="20"
            rows="5"
            placeholder="Session Description...."
            className="textarea textarea-bordered border border-black"
            required
          />
        </div>

        {/* Tutor Information Section */}
        <div className="divider col-span-2">Tutor Information</div>
        <div className="form-control">
          <label htmlFor="tutorName" className="label font-semibold">
            Tutor Name
          </label>
          <input
            {...register("tutorName")}
            type="text"
            id="tutorName"
            defaultValue={user?.displayName}
            placeholder="Tutor Name"
            className="input input-bordered border border-black"
            required
            readOnly
          />
        </div>
        <div className="form-control">
          <label htmlFor="tutorEmail" className="label font-semibold">
            Tutor Email
          </label>
          <input
            {...register("tutorEmail")}
            type="email"
            id="tutorEmail"
            defaultValue={user?.email}
            placeholder="Tutor Email"
            className="input input-bordered border border-black"
            required
            readOnly
          />
        </div>
        <div className="form-control">
          <label htmlFor="tutorImage" className="label font-semibold">
            Tutor Image
          </label>
          <input
            {...register("tutorImage")}
            type="text"
            defaultValue={user?.photoURL}
            placeholder="Tutor Image"
            className="input input-bordered border border-black"
            required
            readOnly
          />
        </div>
        <div className="form-control">
          <label htmlFor="tutorPro" className="label font-semibold">
            Tutor Profession
          </label>
          <input
            {...register("tutorPro")}
            type="text"
            id="tutorPro"
            placeholder="Tutor Profession"
            className="input input-bordered border border-black"
            required
          />
        </div>
        <div className="form-control col-span-2">
          <label htmlFor="tutorDescription" className="label font-semibold">
            Tutor Description
          </label>
          <textarea
            {...register("tutorDescription")}
            id="tutorDescription"
            cols="20"
            rows="5"
            placeholder="Tutor Description...."
            className="textarea textarea-bordered border border-black"
            required
          />
        </div>

        <div className="form-control col-span-2 mt-6">
          <button className="btn bg-neutral-900 text-white hover:bg-neutral-700">
            Add Session
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSession;
