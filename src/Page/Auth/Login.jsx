import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [loader, setLoader] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoader(true);
    logIn(data.email, data.password)
      .then((res) => {
        Swal.fire({
          title: `Logged in!`,
          icon: "success",
          draggable: true,
          background: "#198754",
          color: "#ffff",
          confirmButtonColor: "#000000",
          confirmButtonText: "Continue",
          confirmButtonTextColor: "#ffffff",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: `${error.message}`,
          icon: "error",
          draggable: true,
          background: "#dc3545",
          color: "#ffffff",
          confirmButtonColor: "#000000",
          confirmButtonText: "Close",
          confirmButtonTextColor: "#ffffff",
        });
        setLoader(false);
      });
  };
  return (
    <div className="pb-20 pt-8">
      <h1 className="md:text-5xl text-3xl font-bold text-center">
        Account Login
      </h1>
      <p className="text-sm sm:text-base text-center font-normal mt-2 mb-8">
        Please enter your User/Email & Password
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border border-black max-w-sm md:mx-auto mx-4 p-8 sm:p-12 md:boxFixed rounded-lg"
      >
        <div className="form-control mb-4">
          <input
            {...register("email")}
            type="email"
            placeholder="Username or Email"
            className="input input-bordered border border-black w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <select
            {...register("role")}
            className="select select-none border border-black selected:text-gray-300 w-full"
          >
            <option disabled selected className="text-gray-500">
              Role
            </option>
            <option>Student</option>
            <option>Tutor</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="form-control mb-4">
          <input
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@$%^&*]{8,}$/,
                message:
                  "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
              },
            })}
            type="password"
            placeholder="**********"
            className="input input-bordered border border-black w-full"
            required
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
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
          <button
            type="submit"
            className="btn bg-neutral-900 text-white hover:bg-neutral-700 w-full"
          >
            {loader ? (
              <span className="loading loading-dots loading-xs"></span>
            ) : (
              "Login"
            )}
          </button>
        </div>
        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
