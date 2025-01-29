import React from "react";
import { useForm } from "react-hook-form";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const StudentReview = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { isRole } = useRole();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.displayName || "",
      email: user?.email || "",
    },
  });
  const onSubmit = (data) => {
    const reviews = { photo: user?.photoURL, ...data };

    axiosPublic.post("/reviews", reviews).then((res) => {
      if (res.data.insertedId > "0") {
        Swal.fire({
          icon: "success",
          title: "Thank you for your review",
          color: "#ffff",
          confirmButtonColor: "#000000",
          confirmButtonText: '<span style="color: white;">OK</span>',
        });
      }
    });
    reset();
  };

  return (
    <div className="my-20 md:my-44 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Please Provide Your Review and Rating
      </h1>
      <p className="text-sm md:text-base text-center max-w-3xl mx-auto font-normal mt-3 mb-8">
        We value your feedback! Share your thoughts and experiences with us by
        leaving a review. Your input helps us improve and ensures we continue to
        provide the best service possible. Don’t forget to rate us on a scale of
        1 to 5 stars to let us know how we’re doing. Thank you for helping us
        grow!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border border-black max-w-3xl mx-auto p-6 md:p-12 rounded-lg"
      >
        <div className="form-control">
          <input
            {...register("name")}
            type="text"
            defaultValue={user?.displayName}
            placeholder="Student Name"
            readOnly
            className="input input-bordered border border-black mb-3 w-full"
            required
          />
        </div>
        <div className="form-control">
          <input
            {...register("email")}
            type="email"
            defaultValue={user?.email}
            placeholder="Student Username or Email"
            readOnly
            className="input input-bordered border border-black mb-3 w-full"
            required
          />
        </div>
        <div className="form-control">
          <textarea
            rows="6"
            {...register("review")}
            placeholder="Your Review...."
            className="border border-black p-2 w-full rounded-md"
            required
          ></textarea>
        </div>
        <div className="form-control mt-3">
          <input
            {...register("rating", {
              required: "Rating is required",
              max: {
                value: 5,
                message: "Rating cannot be greater than 5",
              },
              min: {
                value: 0,
                message: "Rating cannot be less than 0",
              },
            })}
            type="number"
            placeholder="Your Rating (out of 5)"
            className="input input-bordered border border-black w-full"
          />
          {errors.rating && (
            <span className="text-red-500 text-sm">
              {errors.rating.message}
            </span>
          )}
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            disabled={isRole !== "Student"}
            className="btn bg-neutral-900 text-white hover:bg-neutral-700 w-full"
            value="Send Review & Rating"
          />
        </div>
      </form>
    </div>
  );
};

export default StudentReview;
