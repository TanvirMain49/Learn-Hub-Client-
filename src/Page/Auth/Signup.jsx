import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { createUser, updatePfp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((res) => {
        updatePfp({ displayName: data.name, photoURL: data.photoURL })
          .then((res) => {
            reset();
            const userInfo = {
              name: data.name,
              photoURL: data.photoURL,
              email: data.email,
              role: data.role,
            };
            navigate('/')
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle=()=>{
    signInWithGoogle()
    .then(res=>{
      console.log(res.user);
      navigate('/')
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="pb-20 pt-8">
      <h1 className="text-5xl font-bold text-center">Create an account</h1>
      <p className="text-base text-center font-normal mt-2 mb-8">
        if you have account,{" "}
        <Link to="/login" className="text-blue-500">
          Register Here
        </Link>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border border-black max-w-lg mx-auto p-12 boxFixed rounded-lg"
      >
        <div className="form-control">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="input input-bordered border border-black mb-3"
            required
          />
        </div>
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
          {/* TODO: pattern and error handling */}
          <input
            {...register("photoURL")}
            type="text"
            placeholder="PhotoURL"
            className="input input-bordered border border-black mb-3"
            required
          />
        </div>
        <div className="form-control rounded-xl">
          <select
            {...register("role")}
            className="select select-none border border-black selected:text-gray-300 mb-2 w-full"
          >
            <option disabled selected className="text-gray-500">
              Role
            </option>
            <option>Student</option>
            <option>Tutor</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="form-control">
          <input
            {...register("password")}
            type="password"
            placeholder="**********"
            className="input input-bordered border border-black"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-neutral-900 text-white hover:bg-neutral-700">
            Signup Now
          </button>
        </div>
        <p className="text-center pt-6 pb-3">or login with</p>

        <div className="flex justify-center items-center gap-2">
          <button
          onClick={handleGoogle}
          className="btn rounded-full bg-neutral-900 text-white hover:border hover:bg-neutral-800 text-xl">
            <FaGoogle></FaGoogle>
          </button>
          <button className="btn rounded-full bg-neutral-900 text-white hover:border hover:bg-neutral-700 text-xl">
            <FaGithub></FaGithub>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
