import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const AddSession = () => {
    const {user} =useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Add a New Session</h1>
      <p className="text-base text-center font-normal mt-3 mb-8 max-w-4xl mx-auto">
      Plan and schedule study sessions with ease. Add essential details, set timings, and ensure a well-structured learning experience for all participants.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border border-black max-w-4xl mx-auto p-12 boxFixed rounded-lg grid grid-cols-2 *:font-semibold"
      > 
        <div className="form-control">
          <input
            {...register("tile")}
            type="text"
            placeholder="Session Title"
            className="input input-bordered border border-black mb-3"
            required
          />
        </div>
        <div className="form-control">
          <input
            {...register("image")}
            type="text"
            placeholder="Session Image"
            className="input input-bordered border border-black"
            required
          />
        </div>


        <div className="form-control">
          <input
            {...register("registerStart")}
            type="text"
            placeholder="Registration Start"
            className="input input-bordered border border-black"
            required
          />
        </div>
        <div className="form-control">
          <input
            {...register("registerEnd")}
            type="text"
            placeholder="Registration End"
            className="input input-bordered border border-black"
            required
          />
        </div>


        <div className="form-control mt-3">
          <input
            {...register("classStart")}
            type="text"
            placeholder="Class Start Time"
            className="input input-bordered border border-black"
            required
          />
        </div>
        <div className="form-control mt-3">
          <input
            {...register("classEnd")}
            type="text"
            placeholder="Class End Time"
            className="input input-bordered border border-black"
            required
          />
        </div>


        <div className="form-control col-span-2">
          <textarea
            {...register("description")}
            type="text"
            cols="20"
            rows="8"
            placeholder="Session Description...."
            className="textarea textarea-bordered border border-black mt-2"
            required
          />
        </div>

        <div className="divider col-span-2">Tutor Information</div>


        {/* tutor info */}

        <div className="form-control mt-3">
          <input
            {...register("tutorName")}
            type="text"
            defaultValue={user?.displayName}
            placeholder="Tutor Name"
            className="input input-bordered border border-black"
            required
            readOnly
          />
        </div>
        <div className="form-control mt-3">
          <input
            {...register("tutorEmail")}
            type="Email"
            defaultValue={user?.email}
            placeholder="Tutor Email"
            className="input input-bordered border border-black"
            required
            readOnly
          />
        </div>
        <div className="form-control mt-3">
          <input
            {...register("tutorImage")}
            type="text"
            placeholder="Tutor Image"
            className="input input-bordered border border-black"
            required
          />
        </div>
        <div className="form-control mt-3">
          <input
            {...register("tutorPro")}
            type="text"
            placeholder="Tutor Profession"
            className="input input-bordered border border-black"
            required
          />
        </div>

        <div className="form-control col-span-2">
          <textarea
            {...register("tutorDescription")}
            type="text"
            cols="20"
            rows="8"
            placeholder="Tutor Description...."
            className="textarea textarea-bordered border border-black mt-2"
            required
          />
        </div>

        <div className="form-control mt-6 col-span-2">
          <button className="btn bg-neutral-900 text-white hover:bg-neutral-700">
            Add Session
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSession;
