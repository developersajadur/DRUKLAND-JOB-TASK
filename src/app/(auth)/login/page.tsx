import LoginForm from '@/Components/Forms/LoginForm';
import Link from 'next/link';
import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="w-[796px] h-[640px] flex justify-center items-center rounded-[16px] bg-white">
                    <h2 className="text-3xl font-normal w-[228px] leading-[39px]">
                    Image or Video of our services
                    </h2>
                </div>
                <div className="">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};

export default Login;