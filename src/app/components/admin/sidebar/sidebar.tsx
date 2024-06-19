"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { BiSolidCategory } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineDataUsage } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { IoPieChartSharp } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import { IoBarChartSharp } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { BsFillMenuButtonFill } from "react-icons/bs";

import { 
  FaBookOpen, 
  FaHome, 
  FaHotel 
} from "react-icons/fa";

import { Architects_Daughter } from "next/font/google";

import { 
  Sidebar as ReactProSidebar,
  Menu, 
  MenuItem, 
  SubMenu, 
  sidebarClasses
} from "react-pro-sidebar";

const ArchitectsDaughter = Architects_Daughter({
  weight: "400",        // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",      // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedItem, setSelectedItem] = useState("/admin/dashboard");

  useEffect(() => {
    setSelectedItem( pathname );
  }, [ pathname ]);

  const menuItems = [
    { label: "Dashboard", 
      icon: <FaHome />, 
      link: "/admin/dashboard" 
    },
    {
      label: "Trips",
      icon: <BiSolidCategory />,
      link: "/admin/trips",
    },
    {
      label: "Hotels",
      icon: <FaHotel />,
      link: "/admin/hotels",
    },
    {
      label: "Cars",
      icon: <IoCarSport />,
      link: "/admin/cars",
    },
    {
      label: "Skiing",
      icon: <FaSkiing />,
      link: "/admin/skiing",
    },
    { label: "Bookings", 
      icon: <FaBookOpen />, 
      link: "/admin/bookings" 
    },
    {
      label: "Scrape Data",
      icon: <MdOutlineDataUsage />,
      link: "/admin/scrape-data",
    },
  ];

  const handleItemClick = (link: string) => {
    setSelectedItem( link );
    router.push(link);
  }

  return (
    <div className="min-h-[100vh]  overflow-hidden">
      <ReactProSidebar 
          className="h-full overflow-hidden"
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#ffffff",
              }
            }
          }}
        >
        <Menu 
            className=" h-[100vh] max-h-[100vh] text-black overflow-hidden"
            menuItemStyles={{
              button:({ level, active }) => {
                return {
                  backgroundColor:active ? "#0E1428" : "#fff",
                  color: active ? "#fff" : "#000",
                  "&:hover": {
                    backgroundColor: active ? "#0E1428" : "#0e1428",
                    color: active ? "#fff" : "#fff",
                  }
                }
              }
            }}
          >
          <div className="flex items-center justify-center my-10 flex-col">
            <Image 
                src="/logo.png" 
                alt="logo"
                height={150}
                width={150}
                className=" cursor-pointer"
                onClick={() => router.push("/admin/dashboard")}
              />
            <span className="text-3xl uppercase font-medium italic">
              <span className={ArchitectsDaughter.className}>ARKLYTE</span>
            </span>
            { menuItems.map(( item, idx ) => (
              <MenuItem 
                  key={idx}
                  icon={item.icon}
                  active={selectedItem === item.link}
                  onClick={() => handleItemClick(item.link)}
                >
                {item.label}
              </MenuItem>
            ))}
            <SubMenu 
                icon=<BsFillMenuButtonFill />
                label="Charts"
              >
              <MenuItem
                  icon=<IoPieChartSharp />
                  active={selectedItem === pathname}
                  onClick={() => handleItemClick("/admin/piecharts")}
                >
                Pie charts 
              </MenuItem>
              <MenuItem
                  icon=<IoBarChartSharp />
                  onClick={() => handleItemClick("/admin/barcharts")}
                >
                Line charts 
              </MenuItem>
            </SubMenu>
            <MenuItem
                icon=<FaCalendarDays />
                active={selectedItem === "/admin/calendar"}
                onClick={() => handleItemClick("/admin/calendar")}
              > 
              Calendar 
            </MenuItem>
            <MenuItem
                icon=<IoDocuments />
                active={selectedItem === "/admin/about"}
                onClick={() => handleItemClick("/admin/about")}
              >
              About
            </MenuItem>
            <MenuItem 
                icon={<LuLogOut />}
                active={selectedItem === "/admin/logout"}
                onClick={() => handleItemClick("/admin/logout")}
              >
              Logout
            </MenuItem>
          </div>
        </Menu>
      </ReactProSidebar>
    </div>
  );
};

export default Sidebar;
