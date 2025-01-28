import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const StudentReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            placeholder="Student Name"
            className="input input-bordered border border-black mb-3 w-full"
            required
          />
        </div>
        <div className="form-control">
          <input
            {...register("email")}
            type="email"
            placeholder="Student Username or Email"
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
            {...register("rating")}
            type="text"
            placeholder="Your Rating (out of 5)"
            className="input input-bordered border border-black w-full"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn bg-neutral-900 text-white hover:bg-neutral-700 w-full"
            value="Send Review & Rating"
          />
        </div>
      </form>
    </div>
  );
};

export default StudentReview;