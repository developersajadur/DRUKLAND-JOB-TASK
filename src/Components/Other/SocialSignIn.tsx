import Image from 'next/image';
import React from 'react';
import facebookImage from "../../../public/Images/facebook.svg"
import googleImage from "../../../public/Images/google.svg"
import linkedinImage from "../../../public/Images/linkedin.svg"

const SocialSignIn = () => {
    const handleSocialLogin = (provider : string) => {
        // Implement the logic to handle social login with the selected provider
        // For example, you can use Firebase Auth or OAuth API
        console.log(`Logging in with ${provider}`);
    };
    return (
        <div>
            <div className="flex items-center gap-1 justify-center">
                <button onClick={() => handleSocialLogin("linkedin")}>
                    <Image className='w-[21.64px] h-[21.64px]' src={linkedinImage} width={25} height={25} alt='linkedin Image'/>
                </button>
                <button onClick={() => handleSocialLogin("google")}>
                    <Image className='w-[21.64px] h-[21.64px]' src={googleImage} width={25} height={25} alt='googleImage Image'/>
                </button>
                <button onClick={() => handleSocialLogin("facebook")}>
                    <Image className='w-[21.64px] h-[21.64px]' src={facebookImage} width={25} height={25} alt='facebookImage Image'/>
                </button>
            </div>
        </div>
    );
};

export default SocialSignIn;