"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdError } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, FloatingLabel, Label, Alert } from "flowbite-react";
import axios from "axios"; // Import axios
import SocialSignIn from "../Other/SocialSignIn";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [flashMessage, setFlashMessage] = useState<string | null>(null); 
  const [flashMessageType, setFlashMessageType] = useState<'success' | 'error' | null>(null); 

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  // API call to handle login
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post("https://social-login.druckland.de/api/v1/user/signin", {
        email: data.email,
        password: data.password,
      });

      // Handle the response data based on success or failure
      if (response.status === 200) {
        setFlashMessage(response.data.message || "Login successful!");
        setFlashMessageType("success");
      } else {
        setFlashMessage(response.data.message || "Something went wrong. Please try again.");
        setFlashMessageType("error");
      }
    } catch (error: any) {
      setFlashMessage(error.response?.data?.message || "An error occurred. Please try again later.");
      setFlashMessageType("error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 rounded-2xl bg-white max-w-sm w-full shadow-lg">
        <h2 className="font-clash text-3xl font-normal text-[#0F0F0F] text-center">Drukland.de</h2>
        
        <div className="mt-8 leading-[5px]">
          <h3 className="font-clash text-2xl text-[#0F0F0F]">Sign In to your account</h3>
          <h6 className="font-clash text-[14px] text-[#292929]">
            Don’t you have an account?{" "}
            <Link href="#" className="font-clash text-base text-[#0B0B0B]">
              Register
            </Link>
          </h6>
        </div>

        {/* Flash Message */}
        {flashMessage && (
          <div className="flex gap-1 items-center justify-center mt-6 text-center">
          <MdError />
          <h6 className="font-clash text-[12px] mt-1 text-black text-center">
            Unknown email address. Try again!
          </h6>
        </div>
        )}

        {/* Form Input */}
        <div className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel
              {...register("email", { required: "Email is required" })}
              variant="standard"
              type="email"
              label="Email Address"
              color="success"
              className="w-full mb-4"
            />
            {errors.email && <p className="font-clash text-red-500 text-xs">{errors.email.message}</p>}

            <FloatingLabel
              {...register("password", { required: "Password is required" })}
              variant="standard"
              type="password"
              label="Password"
              color="success"
              className="w-full mb-4"
            />
            {errors.password && <p className="font-clash text-red-500 text-xs">{errors.password.message}</p>}

            <div className="flex items-center gap-2 mt-8">
              <Checkbox required id="remember" />
              <Label className="flex items-center gap-1 mb-1" htmlFor="remember">
                <p className="font-clash text-sm mt-1 text-[#292929] font-normal">
                  I agree to all
                </p>{" "}
                <Link href="#" className="font-clash text-sm text-[#0B0B0B] font-normal">
                  Terms & Conditions
                </Link>
              </Label>
            </div>

            <Button type="submit" className="font-clash bg-[#0F0F0F] text-base font-normal w-full mt-3">
              Log In
            </Button>
          </form>
        </div>

        {/* Horizontal Rule with Text */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-[#0F0F0F]" />
          <span className="font-clash px-3 text-sm text-[#0F0F0F]">or sign in with</span>
          <hr className="flex-grow border-[#0F0F0F]" />
        </div>

        {/* Social Login */}
        <div>
          <SocialSignIn />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
