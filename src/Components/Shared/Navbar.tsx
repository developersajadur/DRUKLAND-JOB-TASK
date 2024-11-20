"use client";

import { Dropdown } from "flowbite-react";
import {  TextInput } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import cardIcon from "../../../public/Images/Container (2).svg"
import userIcon from "../../../public/Images/Container (1).svg"
import shopIcon from "../../../public/Images/Container.svg"
import { IoIosSearch } from "react-icons/io";

// Define the types for the objects in the navLinks array
interface MegaMenuItem {
  title: string;
  path: string;
}

interface NavLink {
  label: string;
  path?: string; // Optional, because some links will have a path
  megaMenu?: MegaMenuItem[]; // Optional, because some links will not have a mega menu
}

const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    {
      label: "Business",
      megaMenu: [
        {
          title: "Our Success",
          path: "#",
        },
        {
          title: "Get A Plan",
          path: "#",
        },
        {
          title: "Reviews",
          path: "#",
        },
      ],
    },
    {
      label: "Products",
      megaMenu: [
        {
          title: "Top Products",
          path: "#",
        },
        {
          title: "Best Selling Products",
          path: "#",
        },
      ],
    },
    {
      label: "About Us",
      path: "#", // This one doesn't have a megaMenu, just a link
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="h-[80px] flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold text-[#0B0B0B]">Drukland.de</h1>
        </Link>
        <div className="flex gap-4 items-center">
          {/* Loop through navLinks */}
          {navLinks.map((item, index) => (
            <div key={index} id="dropdown_main" className="w-fit">
              {/* Check if megaMenu exists, else just render a Link */}
              {item.megaMenu ? (
                <Dropdown className="w-fit" label={item.label} dismissOnClick={false}>
                  {item.megaMenu.map((subItem, subIndex) => (
                    <Dropdown.Item key={subIndex}>
                      <Link className="text-black text-base font-normal w-fit" href={subItem.path}>{subItem.title}</Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              ) : (
                // If no megaMenu, just display a simple link
                <Link href={item.path || "#"} className="text-black text-base font-normal">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <form id="form" action="search" className="w-[565px] h-[33px]">
          <TextInput  id="search" type="text" icon={IoIosSearch } placeholder="Search" required />
          </form>
          <div className="flex gap-4 items-start">
         <Link href="#"><Image src={cardIcon} width={30} height={30} alt="icon"/></Link>
         <Link href="#"><Image src={userIcon} width={30} height={30} alt="icon"/></Link>
         <Link href="#"><Image src={shopIcon} width={30} height={30} alt="icon"/></Link>
       </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
