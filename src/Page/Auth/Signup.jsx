import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser, updatePfp, signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  // TODO: error from
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoader(true);
    createUser(data.email, data.password)
      .then((res) => {
        updatePfp({ displayName: data.name, photoURL: data.photoURL })
          .then(async (res) => {
            const userInfo = {
              name: data.name,
              photoURL: data.photoURL,
              email: data.email,
              role: data.role,
            };
            const userRes = await axiosPublic.post(
              `/users?email=${data.email}`,
              userInfo
            );
            console.log(userRes.data);
            if (userRes.data.insertedId > "0") {
              Swal.fire({
                title: `${data.name} Welcome Back!`,
                icon: "success",
                draggable: true,
                background: "#198754",
                color: "#ffff",
                confirmButtonColor: "#000000",
                confirmButtonText: "Continue",
                confirmButtonTextColor: "#ffffff",
              });
            }
            setLoader(false)
            navigate("/");
            reset();
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
          });
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
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then(async (res) => {
        console.log(res.user);
        const userInfo = {
          name: res.user.displayName,
          photoURL: res.user.photoURL,
          email: res.user.email,
          role: "Student",
        };
        const userRes = await axiosPublic.post(
          `/users?email=${res.user.email}`,
          userInfo
        );
        console.log(userRes.data);
        if (userRes.data.insertedId > "0") {
          Swal.fire({
            title: `${res.user.name} Welcome Back!`,
            icon: "success",
            draggable: true,
            background: "#198754",
            color: "#ffff",
            confirmButtonColor: "#000000",
            confirmButtonText: "Continue",
            confirmButtonTextColor: "#ffffff",
          });
        }
        navigate("/");
      })
      .catch((error) => {
        // TODO: Error alert
        console.log(error);
      });
  };
  return (
    <div className="pb-20 pt-8">
      <h1 className="md:text-5xl text-3xl font-bold text-center">
        Create an account
      </h1>
      <p className="text-base text-center font-normal mt-2 mb-8">
        if you have account,{" "}
        <Link to="/login" className="text-blue-500">
          login Here
        </Link>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body border border-black md:max-w-lg max-w-sm mx-3  md:mx-auto md:p-12 p-6 md:boxFixed rounded-lg"
      >
        <div className="form-control">
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
            type="text"
            placeholder="Name"
            className="input input-bordered border border-black mb-3"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="form-control">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email with '@'",
              },
            })}
            type="email"
            placeholder="Email"
            className="input input-bordered border border-black mb-3"
            required
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="form-control">
          {/* TODO: pattern and error handling */}
          <input
            {...register("photoURL", {
              required: "photoURL is required",
            })}
            type="text"
            placeholder="PhotoURL"
            className="input input-bordered border border-black mb-3"
            required
          />
          {errors.photoURL && (
            <span className="text-red-500 text-sm">
              {errors.photoURL.message}
            </span>
          )}
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
            className="input input-bordered border border-black"
            required
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-neutral-900 text-white hover:bg-neutral-700">
          {loader ? <span className="loading loading-dots loading-xs"></span> : "Signup"}
          </button>
        </div>
        <p className="text-center pt-6 pb-3">or login with</p>

        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handleGoogle}
            className="btn rounded-full bg-neutral-900 text-white hover:border hover:bg-neutral-800 text-xl"
          >
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
