import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import faqIcon from "../../../public/Images/Group.svg"
import inquiryIcon from "../../../public/Images/Group-1.svg"
import supportIcon from "../../../public/Images/Group-2.svg"
import contactIcon from "../../../public/Images/Vector-1.svg"

const TopHeader = () => {
    const topHeaderLinks = [
        {
            title: 'FAQ',
            path: '#',
            icon: faqIcon,
        },
        {
            title: 'Send Inquiry',
            path: '#',
            icon: inquiryIcon,
        },
        {
            title: 'Live Support',
            path: '#',
            icon: supportIcon,
        },
        {
            title: 'Contact',
            path: '#',
            icon: contactIcon,
        },
    ]
    return (
        <div className='bg-[#DDDDDD]'>
            <div className="container mx-auto px-4 h-12 flex gap-4 items-center justify-end">
                {topHeaderLinks.map((link, index) => 
                    <Link className='flex gap-1 items-center justify-center' href={link.path} key={index}>
                        <p className='text-sm font-normal'>{link.title}</p>
                        <Image className='h-4 w-4 mt-1' src={link.icon} width={16} height={16} alt={link.title}/>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default TopHeader;