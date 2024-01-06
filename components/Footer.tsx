"use client";

import Image from "next/image";
import { services } from "@/constants/services";
import Link from "next/link";
import { navLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { ADDRESSES, ICONS } from "@/constants/footer-data";
import JiraForm from "./atom/JiraForm";
import MaxWidthContainer from "./MaxWidthContainer";

/**
 * This component render the footer
 * @returns
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-APP_ASH dark:bg-zinc-950 dark:border-t-gray-700 border-t ">
        <div id="footer" className={cn("paddingX py-6 lg:relative")}>
          {/* Top row */}
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between mb-8">
            <Link href="/" className="flex items-center gap-5 poppins-heading">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="company logo"
              />
              <h1 className="text-xl gradient-text">
                OGSoft Solutions Limited
              </h1>
            </Link>
            <div className="flex items-center gap-4">
              {ICONS.map((item) => {
                return (
                  <div
                    onClick={() => open(item.url, "_blank")}
                    key={item.title}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 hover:bg-blue-200 cursor-pointer items-center flex justify-center hover:-translate-y-2 duration-300 ease-in"
                  >
                    {
                      <item.Icon className="w-1/2 text-blue-900 dark:text-blue-100 cursor-pointer" />
                    }
                  </div>
                );
              })}
            </div>
          </div>

          {/* Middle */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 my-4 mb-6 ">
            {/* Services */}
            <div>
              <h3 className="poppins gradient-text font-bold mb-2 text-2xl">
                Services
              </h3>
              {services.map((service) => (
                <Link
                  key={service.desc}
                  href={`/services?id=#${service.title}`}
                >
                  <p className={cn("p-text leading-6 hover:text-blue-700 ")}>
                    {service.title}
                  </p>
                </Link>
              ))}
            </div>

            {/* Links */}
            <div>
              <h3 className="poppins gradient-text font-bold mb-2 text-2xl">
                Resources
              </h3>
              {navLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  <p
                    className={cn(
                      "p-text leading-6 hover:text-blue-700 capitalize"
                    )}
                  >
                    {link.id}
                  </p>
                </Link>
              ))}
            </div>

            {/* Phone*/}
            <div className="mb-6 col-span-2 md:col-span-1">
              <h3 className="poppins gradient-text font-bold mb-2 text-2xl">
                Reach Us
              </h3>
              <p className="p-text cursor-pointer hover:text-blue-700 leading-6">
                Nigeria +2348139549853
              </p>
              <p className="p-text cursor-pointer hover:text-blue-700 leading-6">
                Australia +61 432 112 003
              </p>
              <p className="p-text cursor-pointer hover:text-blue-700 leading-6">
                Zimbabwe +263 77 988 7086
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div className="flex flex-col">
              <h3 className="poppins gradient-text font-bold mb-2 text-2xl">
                Our Offices
              </h3>
              <div>
                {ADDRESSES.map((address) => (
                  <span
                    key={address}
                    className={cn(
                      "p-text capitalize leading-6  flex space-x-2 items-center"
                    )}
                  >
                    <MapPin className="text-blue-700 hidden lg:block" />{" "}
                    {address}
                  </span>
                ))}
              </div>
            </div>
            {/* Right */}
            <div>{/* TODO: Add map */}</div>
          </div>
          {/* Bottom */}
        </div>
      </footer>

      {/* Last footer part */}
      <section className="bg-zinc-100 dark:border-t-gray-700 border-t border-t-gray-200 dark:bg-zinc-950 py-6">
        <MaxWidthContainer>
          <p
            className={cn(
              "text-center dark:text-muted-foreground p-text gradient-text text-base py-2"
            )}
          >
            &copy;{year} Ogsoft solutions limited. All rights reserved.
          </p>
        </MaxWidthContainer>
      </section>
    </>
  );
};

export default Footer;
