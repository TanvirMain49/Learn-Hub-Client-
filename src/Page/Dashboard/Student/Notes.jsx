import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Notes = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      reset()
    };
  
    return (
      <div className="pb-20 pt-8">
        <h1 className="text-5xl font-bold text-center">Create Your Notes</h1>
        <p className="text-base text-center font-normal mt-3 mb-8 max-w-4xl mx-auto">
        Quickly create and save notes to keep track of important study points, reminders, or ideas. With an intuitive interface, organizing your thoughts has never been easier. Start writing and stay on top of your learning journey!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body border border-black max-w-3xl mx-auto p-12 boxFixed rounded-lg"
        >
          <div className="form-control">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="input input-bordered border border-black mb-3"
              required
            />
          </div>
          <div className="form-control">
            <input
              {...register("title")}
              type="text"
              placeholder="Title"
              className="input input-bordered border border-black"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              {...register("note")}
              type="text"
              cols="20"
              rows="8"
              placeholder="Note Description...."
              className="textarea textarea-bordered border border-black mt-2"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-neutral-900 text-white hover:bg-neutral-700">
              Create Note
            </button>
          </div>
        </form>
      </div>
    );
};

export default Notes;