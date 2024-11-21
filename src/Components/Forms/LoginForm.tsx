"use client";
import Link from "next/link";
import React from "react";
import { MdError } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, FloatingLabel, Label } from "flowbite-react";
import SocialSignIn from "../Other/SocialSignIn";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <div className="p-8 rounded-2xl bg-white">
        <h2 className="text-3xl font-normal text-[#0F0F0F] text-center">
          Drukland.de
        </h2>
        <div className="mt-8 leading-[5px]">
          <h3 className="text-2xl text-[#0F0F0F]">Sign In to your account</h3>
          <h6 className="text-[14px] text-[#292929]">
            Don’t you have an account?{" "}
            <Link href="#" className="text-base text-[#0B0B0B]">
              Register
            </Link>
          </h6>
        </div>

        {/* Error Message */}
        <div className="flex gap-1 items-center justify-center mt-6 text-center">
          <MdError />
          <h6 className=" text-[12px] text-black text-center">
            Unknown email address. Try again!
          </h6>
        </div>

        {/* Form Input */}
        <div className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel
              {...register("email", { required: true })}
              variant="standard"
              type="email"
              label="Email Address"
              color="success"
            />
            <FloatingLabel
              {...register("password", { required: true })}
              variant="standard"
              type="password"
              label="Password"
              color="success"
            />

            <div className="flex items-center gap-2 mt-8">
              <Checkbox required id="remember" />
              <Label
                className="flex items-center gap-1 mb-1"
                htmlFor="remember"
              >
                <p className="text-sm text-[#292929] font-normal">
                  I agree to all
                </p>{" "}
                <Link href="#" className="text-sm text-[#0B0B0B] font-normal">
                  Terms & Conditions
                </Link>
              </Label>
            </div>
            <Button className="bg-[#0F0F0F] text-base font-normal w-full mt-3">
              Log In
            </Button>
          </form>
        </div>

        {/* Horizontal Rule with Text */}
        <div className="flex items-center my-4">
        <hr className="flex-grow border-[#0F0F0F]" />
          <span className="px-3 text-sm text-[#0F0F0F]">or sign in with</span>
          <hr className="flex-grow border-[#0F0F0F]" />
        </div>
        {/* social login */}
        <div className="">
            <SocialSignIn/>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
