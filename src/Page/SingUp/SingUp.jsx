import React, { useContext } from "react";
import login from "../../assets/login-img.avif";
import { useAuth } from "../../Providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import SignupForm from "../SignupForm";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SingUp = () => {
  const { signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from);
      })
      .catch(() => {});
  };

  return (
    <>
      <Helmet>
        <title>Yoga School | Sing Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-8 mx-auto">
        <div className="md:w-3/5 md:mt-32">
          <img src={login} alt="" />
        </div>
        <div className=" md:w-2/5 md:m-10 h-full bg-base-200 rounded-lg">
          <SignupForm />
          <div className="mt-4 text-center">
            <button>
              Already have an account?
              <Link to="/login" className="text-lime-500 font-bold">
                Login
              </Link>
            </button>
          </div>
          <div
            onClick={handleGoogle}
            className="p-[10px] mb-8 bg-blue-200 cursor-pointer border rounded-lg w-4/5 md:w-2/4  mx-auto flex gap-[6px] mt-[33px]"
          >
            <FcGoogle className="text-[32px]" />
            <span>Continue with Google</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
