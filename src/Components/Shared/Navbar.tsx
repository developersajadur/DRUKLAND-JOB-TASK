"use client";

import { Dropdown, TextInput } from "flowbite-react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaUser, FaShoppingBasket, FaCarSide } from "react-icons/fa";

// TypeScript interfaces for navigation items
interface MegaMenuItem {
  title: string;
  path: string;
}

interface NavLink {
  label: string;
  path?: string;
  megaMenu?: MegaMenuItem[];
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
      path: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="h-[80px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-clash text-4xl font-semibold text-[#0B0B0B]">Drukland.de</h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-4 items-center">
          {navLinks.map((item, index) => (
            <div key={index} id="dropdown_main" className="w-fit">
              {item.megaMenu ? (
                <Dropdown
                  className="w-fit"
                  label={item.label}
                  dismissOnClick={false}
                >
                  {item.megaMenu.map((subItem, subIndex) => (
                    <Dropdown.Item key={subIndex}>
                      <Link
                        className="font-clash text-black text-base font-normal w-fit"
                        href={subItem.path}
                      >
                        {subItem.title}
                      </Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              ) : (
                <Link
                  href={item.path || "#"}
                  className="font-clash text-black text-base font-normal"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Search Bar */}
          <form id="form" action="search" className="w-[565px] h-[33px]">
            <TextInput
              id="search"
              type="text"
              icon={IoIosSearch}
              placeholder="Search"
              required
            />
          </form>

          {/* Action Icons */}
          <div className="flex gap-4 items-center text-3xl text-[#0B0B0B]">
            <Link href="#" className="">
              <FaCarSide />
            </Link>
            <Link href="#" className="">
              <FaUser />
            </Link>
            <Link href="#" className="">
              <FaShoppingBasket />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
