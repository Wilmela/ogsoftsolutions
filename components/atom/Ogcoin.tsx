import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import Iframe from "react-iframe";


const Ogcoin = () => {
  return (
    <div id="OGCoin E-Health Africa">
      <h1 className="main-heading">OGCoin E-Health Africa</h1>
      <h1 className="main-desc">Our secure unified payment system</h1>

      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        {/* Top */}
        <div className="p-4 flex-[0.4] ">
          <Image
            src="/ogcoin-logo.png"
            width={200}
            height={200}
            alt="ogcoin logo"
            className="object-contain object-center"
          />
        </div>

        <div className="flex-1">
          <p className="p-text font-semibold lg:text-justify">
            OGCoin E-Health Africa (OGC) is an ERC20 standard token built on
            Ethereum platform and network that creates access to OGSOFT
            SOLUTIONS LTD systems used for a secure and decentralized approach
            of confirming transactions within their ecosystem of connected
            healthcare centers in Africa
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
        <div>
          <p className="p-text lg:text-justify">
            1. Spearhead the healthcare revolution in Africa with a unique
            opportunity for the advancement of a unified HealthCare System
            through Cryptocurrency. <br />
            2. Create a unified payment system worldwide no matter the treatment
            centre for both practitioners and clients alike with no need for
            international currency conversion and eliminating the need for
            integrated Eftpos systems and cash as funds are instantly
            transferred between payer and payee through our systems utilizing
            OGC.
          </p>
          <br />
        </div>
        <div>
          <p className="p-text lg:text-justify">
            3. Aid in the advancement of a universal Health Care Management
            System
          </p>

          <div className="w-full mt-2">
            <Iframe
              url="https://www.youtube.com/embed/Z17umAvfEBE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              width="400"
              allowFullScreen
              // height="300"
              display="block"
              position="relative"
              className="w-full md:w-[500px] h-[350px]"
            />
          </div>
        </div>
      </div>
      <Link
        href="https://ogcoin.online/"
        target="_blank"
        className={cn(
          "p-text hover:text-blue-900",
          buttonVariants({ variant: "link" })
        )}
      >
        Check out OGCoin
      </Link>
    </div>
  );
};

export default Ogcoin;
