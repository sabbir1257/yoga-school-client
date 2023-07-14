import React, { useContext, useState } from "react";
import login from "../../assets/login-img.avif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useAuth } from "../../Providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Login = () => {  
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { axiosSecure } = useAxiosSecure()

  const { signIn, signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => console.log(error));
  };

  const handelGoogle = () => {
    signInWithGoogle()
        .then((result) => {
            const user = {
                name: result?.user?.displayName,
                email: result?.user?.email,
                photo_url: result?.user?.photoURL
            }


            axiosSecure.put(`/add-user?email=${user?.email}`, user)
                .then(res => {
                    if (res.data) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login sucessfull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            navigate(from)
        })
        .catch((error) => {
        })
}
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  return (
    <div className="hero min-h-screen ">
      <Helmet>
        <title>Yoga School | Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-8">
        <div className="text-center ">
          <img className="rounded-lg" src={login} alt="" />
        </div>
        <div className=" flex-shrink-0 md:w-2/5 md:m-10 bg-base-200 rounded-lg">
          <h1 className="text-3xl font-bold text-center mt-5">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="block mb-2 font-bold text-gray-700">
                  Email
                </span>
              </label>
              <input
               {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 font-bold text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                   {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent border-none outline-none focus:outline-none cursor-pointer"
                  >
                    {showPassword ? (
                      <HiEyeOff size={20} />
                    ) : (
                      <HiEye size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-lime-500 hover:bg-lime-700  hover:text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="mt-4 ml-8">
            <button>
              New Here?
              <Link to="/sing-up" className="text-lime-500 font-bold">
                Create an account
              </Link>
            </button>
          </div>
          <div className="divider"></div>
          <div
            onClick={handelGoogle}
            className="p-[10px] bg-blue-200 cursor-pointer border rounded-lg w-4/5 md:w-2/4 mx-auto flex mb-8 gap-[6px] mt-[33px]"
          >
            <FcGoogle className="text-[32px]" />
            <span>Continue with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
