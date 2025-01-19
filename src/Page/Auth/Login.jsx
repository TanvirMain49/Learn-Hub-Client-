import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
  const {logIn} = useAuth();

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    
    logIn(data.email, data.password)
    .then(res=>{
      console.log(res.user);
      
    })
    .catch(error=>{
      console.log(error);
    })

  }
  return (
    <div className="pb-20 pt-8">
      <h1 className="text-5xl font-bold text-center">Account Login</h1>
      <p className="text-base text-center font-normal mt-2 mb-8">
        Please enter your User/Email & Password
      </p>
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-body border border-black max-w-sm mx-auto p-12 boxFixed rounded-lg">
        <div className="form-control">
          <input
            {...register("email")}
            type="email"
            placeholder="Username or Email"
            className="input input-bordered border border-black mb-3"
            required
          />
        </div>
        <div className="form-control rounded-xl">
          <select
          {...register("role")}
          className="select select-none border border-black selected:text-gray-300 mb-2 w-full max-w-xs">
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
          <label className="label">
            <a
              href="#"
              className="label-text-alt link link-hover text-blue-500"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn bg-neutral-900 text-white hover:bg-neutral-700" value = "Login" />
        </div>
        <p className="mt-12">
          Don't have an account ,
          <Link to="/signup" className="text-blue-500">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
