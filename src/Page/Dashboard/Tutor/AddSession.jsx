import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import DasHeading from "../../../Shared/DashBoardHeading";

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
    const sessionImageFile = { image: data.image[0] };
    const registerStartDate = new Date(data.classStart);

    if (!data.image || !data.image[0]) {
      Swal.fire({
        title: "No Image Uploaded",
        text: "Please upload a session image.",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }
    if (registerStartDate < new Date()) {
      Swal.fire({
        title: "Invalid Date",
        text: "Register start date must be greater than the current date.",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    const imgData = new FormData();
    imgData.append("file", sessionImageFile.image);
    imgData.append("upload_preset", "Learn_Hub");
    imgData.append("cloud_name", "dvrn5hqsv");

    // Upload session image
    const sessionImageRes = await axiosPublic.post(
      "https://api.cloudinary.com/v1_1/dvrn5hqsv/image/upload",
      imgData
    );

    if (sessionImageRes.data.secure_url) {
      const sessionInfo = {
        title: data.title,
        description: data.description,
        classStart: data.classStart,
        classEnd: data.classEnd,
        status: "pending",
        price: "0",
        imageUrl: sessionImageRes.data.secure_url,
        tutorImageUrl: data.tutorImage,
        registerStart: resStart.toISOString().split("T")[0],
        registerEnd: resEnd.toISOString().split("T")[0],
        tutorName: data.tutorName,
        tutorEmail: data.tutorEmail,
        tutorPro: data.tutorPro,
        tutorDescription: data.tutorDescription,
      };
      // post in the server side
      const sessionRes = await axiosPublic.post("/session", sessionInfo);
      // data is inserted at mongodb
      if (sessionRes.data.insertedId) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
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
          title: `${sessionInfo.title} session added`,
        });
      }
      reset();
    }
  };

  return (
    <div>
      <DasHeading
        Heading="Add a session"
        subHeading="Let's Get Started"
      ></DasHeading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body bg-white dark:bg-neutral-700 border border-black rounded-lg md:grid flex flex-col md:grid-cols-2  p-4 md:max-w-4xl md:mx-auto md:p-12"
      >
        {/* Session Details Section */}
        <div className="form-control">
          <label
            htmlFor="title"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Session Title
          </label>
          <input
            {...register("title")}
            type="text"
            id="title"
            placeholder="Session Title"
            className="input input-bordered border border-black w-full dark:bg-neutral-400 placeholder:dark:text-black/80"
            required
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="image"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Session Image
          </label>
          <input
            {...register("image")}
            type="file"
            className="file-input file-input-bordered border-black dark:bg-neutral-400 w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="registerStart"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Registration Start
          </label>
          <DatePicker
            selected={resStart}
            onChange={(date) => setResStart(date)}
            className="input input-bordered border border-black dark:bg-neutral-400 w-full"
            required
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="registerEnd"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Registration End
          </label>
          <DatePicker
            selected={resEnd}
            onChange={(date) => setResEnd(date)}
            className="input input-bordered border border-black w-full dark:bg-neutral-400"
            required
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="classStart"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Class Start Time
          </label>
          <input
            {...register("classStart")}
            type="time"
            id="classStart"
            placeholder="Class Start Time"
            className="input input-bordered border border-black dark:bg-neutral-400 w-full"
            required
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="classEnd"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Class End Time
          </label>
          <input
            {...register("classEnd")}
            type="time"
            id="classEnd"
            placeholder="Class End Time"
            className="input input-bordered border border-black dark:bg-neutral-400 w-full"
            required
          />
        </div>
        <div className="form-control col-span-2">
          <label
            htmlFor="description"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Session Description
          </label>
          <textarea
            {...register("description")}
            cols="20"
            rows="5"
            placeholder="Session Description...."
            className="textarea textarea-bordered border border-black dark:bg-neutral-400 placeholder:dark:text-black/80 w-full"
            required
          />
        </div>

        {/* Tutor Information Section */}
        <div className="divider col-span-2 text-base md:text-lg">
          <h1 className="dark:text-white/80">Tutor Information</h1>
        </div>
        <div className="form-control">
          <label
            htmlFor="tutorName"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Tutor Name
          </label>
          <input
            {...register("tutorName")}
            type="text"
            id="tutorName"
            defaultValue={user?.displayName}
            placeholder="Tutor Name"
            className="input input-bordered border border-black dark:bg-neutral-400 w-full"
            required
            readOnly
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="tutorEmail"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Tutor Email
          </label>
          <input
            {...register("tutorEmail")}
            type="email"
            id="tutorEmail"
            defaultValue={user?.email}
            placeholder="Tutor Email"
            className="input input-bordered border border-black dark:bg-neutral-400 w-full"
            required
            readOnly
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="tutorImage"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Tutor Image
          </label>
          <input
            {...register("tutorImage")}
            type="text"
            defaultValue={user?.photoURL}
            placeholder="Tutor Image"
            className="input input-bordered border border-black dark:bg-neutral-400 w-full"
            required
            readOnly
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="tutorPro"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Tutor Profession
          </label>
          <input
            {...register("tutorPro")}
            type="text"
            id="tutorPro"
            placeholder="Tutor Profession"
            className="input input-bordered border border-black dark:bg-neutral-400 placeholder:dark:text-black/80 w-full"
            required
          />
        </div>
        <div className="form-control col-span-2">
          <label
            htmlFor="tutorDescription"
            className="label font-semibold text-base md:text-lg dark:text-white/80"
          >
            Tutor Description
          </label>
          <textarea
            {...register("tutorDescription")}
            id="tutorDescription"
            cols="20"
            rows="5"
            placeholder="Tutor Description...."
            className="textarea textarea-bordered border border-black dark:bg-neutral-400 placeholder:dark:text-black/80 w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control col-span-2 mt-6">
          <button className="btn bg-neutral-900 dark:bg-neutral-700 text-white hover:bg-neutral-700 w-full md:w-auto">
            Add Session
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSession;
