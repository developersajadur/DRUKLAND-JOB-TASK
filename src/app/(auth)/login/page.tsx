import LoginForm from '@/Components/Forms/LoginForm';
import React from 'react';
import Head from 'next/head';

const Login = () => {
    return (
        <div>
            <Head>
                <title>Login - Drukland</title>
                <meta name="description" content="Login to your Drukland account." />
                <meta name="keywords" content="login, Drukland, user authentication" />
                <meta name="author" content="Drukland Team" />
                <meta property="og:title" content="Login - Drukland" />
                <meta property="og:description" content="Login to your Drukland account." />
                <meta property="og:image" content="URL_TO_IMAGE" />
                <meta property="og:url" content="https://www.drukland.de/login" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@drukland" />
            </Head>

            <div className="flex justify-between items-center">
                <div className="w-[796px] h-[640px] flex justify-center items-center rounded-[16px] bg-white">
                    <h2 className="font-clash text-3xl text-center font-normal w-[228px] leading-[39px]">
                        Image or Video of our services
                    </h2>
                </div>
                <div className="">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
