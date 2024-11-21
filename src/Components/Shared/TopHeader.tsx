"use client";

import Link from "next/link";
import React from "react";

// React Icons imports
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { BiMessageRoundedDetail, BiSolidUserRectangle } from "react-icons/bi";

// Interface for topHeaderLinks
interface TopHeaderLink {
  title: string;
  path: string;
  icon: React.ReactNode; // Type for React elements
}

const TopHeader: React.FC = () => {
  const topHeaderLinks: TopHeaderLink[] = [
    {
      title: "FAQ",
      path: "#",
      icon: <FaRegCircleQuestion className="text-lg" />, // Adding the icon component directly
    },
    {
      title: "Send Inquiry",
      path: "#",
      icon: <MdMailOutline className="text-lg" />,
    },
    {
      title: "Live Support",
      path: "#",
      icon: <BiMessageRoundedDetail className="text-lg" />,
    },
    {
      title: "Contact",
      path: "#",
      icon: <BiSolidUserRectangle className="text-lg" />,
    },
  ];

  return (
    <div className="bg-[#DDDDDD]">
      <div className="container mx-auto px-4 h-12 flex gap-4 items-center justify-end">
        {topHeaderLinks.map((link, index) => (
          <Link
            className="flex gap-2 items-center justify-center text-[#0B0B0B]"
            href={link.path}
            key={index}
          >
            <p className="text-sm font-normal">{link.title}</p>
            <span>{link.icon}</span> {/* Render the icon */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopHeader;
