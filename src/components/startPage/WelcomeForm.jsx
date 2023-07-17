import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import welcomeSchema from "../../modals/WelcomeForm";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const WelcomeForm = () => {
  // this component take first name from user and stored it in cookies then navigate to ExamPage
  // in this page i used:
  // 1)yup to validate the input CSSMathValue
  // 2) React Hook Form to easy used of input (value-error ) and handleSubmit
  // 3)Js-Cookie to store First name in cookies during session.
  // 4)use navigate hook to navigate to exam page after submit form

  // Use navigate Hook
  const navigate = useNavigate();

  //Use React Hook Form + validate with Yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(welcomeSchema),
  });

  // Handle submitt
  const onSubmitHandler = async (data) => {
    // save user name in cookies
    Cookies.set("userFirstName", data.firstName);
    //toastfy First name
    toast.success(`welcome ${data.firstName}`);
    // navigae to examPage
    navigate("/exam");
  };
  return (
    <>
      <div className="h-screen  flex flex-col md:flex-row">
        {/* Exam Rules */}
        <div className="md:order-none order-last  relative overflow-hidden md:flex w-full  p-3 md:h-screen md:w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700  justify-around items-center ">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Hello</h1>
            <h3 className="text-white font-bold text-xl font-sans mt-1 text-left px-3">
              Our Exam Rules:
            </h3>
            <div className="text-white mt-1 text-left px-6 pb-3">
              <h5>1- answer question by select one answer.</h5>
              <h5> 2-No.Question=10 .</h5>
              <h5>
                3-After Submitting test, your result will showed according to
                your answered questions.
              </h5>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          </div>
        </div>
        {/* Welcome Form */}
        <div className="flex md:w-1/2 justify-center py-3 md:py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit(onSubmitHandler)}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome</h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                {...register("firstName")}
              />
            </div>
            <p className="text-red-500 mx-auto lg:text-base sm:text-sm text-[10px]">
              {errors.firstName?.message}
            </p>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Start Exam
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WelcomeForm;
