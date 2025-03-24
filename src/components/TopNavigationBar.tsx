"use client";
import React, { useState } from "react";
import AppButton from "./fields/AppButton";
import { cn } from "@/libs/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const TopNavigationBar: React.FC = () => {
  const links: string[] = [
    "Models",
    "Pricing",
    "About Us",
    "Contact Us",
    "Custom Models",
  ];
  const route = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);
  const formatLink = (link: string) => {
    return "/" + link.replace(/[" "]/g, "-").toLowerCase();
  };
  return (
    <div className="max-w-main mx-auto w-[90%] py-10 lg:grid lg:grid-cols-[0.5fr_2.2fr_1fr] flex justify-between items-center">
      <Link href={"/"} className="w-full">
        <Image alt="logo" src="/logo.svg" width={50} height={50} />
      </Link>
      {/* WEB LINKS */}
      <div className="lg:flex hidden items-center justify-center lg:space-x-4 space-x-2 w-full">
        {links?.map((link) => {
          return (
            <Link
              href={`${formatLink(link)}`}
              className={cn(
                "text-base px-2 py-1 rounded-md text-white bg-transparent",
                {
                  "bg-primary text-black": pathname === formatLink(link),
                }
              )}
            >
              {link}
            </Link>
          );
        })}
      </div>
      <div className="w-full flex justify-end">
        <Image
          alt="burger"
          src="/burger-icon.svg"
          width={30}
          height={30}
          className="lg:hidden flex relative"
          onClick={() => {
            setOpen(true);
          }}
        />
        <div className="lg:flex hidden lg:items-center items-start space-x-6 w-full justify-end">
          <AppButton placeholder="Login" outline className="px-6" />
          <AppButton placeholder="Get Started Now" className="w-fit" />
        </div>
      </div>

      {/* MOBILE NAV MENU */}

      {/* MOBILE LINKS */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 transform -translate-x-full block fixed top-0 left-0 w-full bg-primary bg-opacity-50 z-10 backdrop-blur-sm h-screen",
          {
            "translate-x-0": open === true,
          }
        )}
      >
        <div className="space-y-10 p-10 bg-primary w-full">
          <div className="flex justify-between">
            <Image alt="logo" src="/logo.svg" width={60} height={60} />
            <Image
              alt="close"
              src="/close-icon.svg"
              width={30}
              height={30}
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          <div className="flex flex-col space-y-6">
            {links?.map((link) => {
              return (
                <Link
                  href={`${formatLink(link)}`}
                  className={cn(
                    "text-white px-2 py-1 rounded-md bg-transparent",
                    {
                      "bg-primary text-black": pathname === formatLink(link),
                    }
                  )}
                >
                  {link}
                </Link>
              );
            })}
          </div>
          <AppButton placeholder="Login" outline className="px-10" />
          <AppButton placeholder="Get Started Now" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
