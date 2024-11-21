import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const footerLinks = [
        {
            title: "Terms of Use",
            path: "#",
        },
        {
            title: "Sitemap",
            path: "#",
        },
        {
            title: "Company information",
            path: "#",
        },
        {
            title: "Cookie settings",
            path: "#",
        },
    ]
    const currentYear = new Date().getFullYear()
    return (
        <div className='container mx-auto px-4 pb-16 pt-5 border-t-[#292929] border-t-[0.6px]'>
            <div className="flex justify-between items-center">
            <div className="">
            <h6 className="text-sm text-[#000000] font-normal">
            All rights reserved © {currentYear} |  Drukland.de
            </h6>
            </div>

            <div className="flex gap-4 items-center">
                {footerLinks.map((link, index) => (
                    <Link href={link.path} key={index} className="text-sm text-[#000000] font-normal">
                        {link.title}
                    </Link>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Footer;