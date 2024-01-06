"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/constants/nav-links";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { MenuIcon, XIcon, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { MotionDiv, MotionUl } from "./atom/Motion";
import JiraForm from "./atom/JiraForm";
import MaxWidthContainer from "./MaxWidthContainer";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [toggled, setToggled] = useState(false);

  const toggleButton = {
    size: 35,
    color: "#1D40A3",
    style: "cursor-pointer",
  };

  const [showNav, setShowNav] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [setShowNav]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (toggled) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  });

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <MaxWidthContainer
        className={cn(
          "flex items-center justify-between w-full h-16 relative py-4 border-b",
          {
            "animate-slideDown fixed top-100 h-16 left-0 right-0 px-4 md:px-8 lg:px-28 min-w-[100vw] bg-white dark:bg-black z-50":
              showNav,
          }
        )}
      >
        {/* Left */}
        <div className="flex flex-1 items-center gap-5">
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/logo.png" width={32} height={32} alt="company-logo" />
            <span className="gradient-text poppins-heading hidden lg:block">
              OGSoft Solutions
            </span>
          </Link>

          <MotionUl
            className={classnames({
              "mmd:flex hidden items-center justify-between": !toggled,

              "flex flex-col absolute top-[64px] right-0 w-6/12 bg-gradient-to-br from-zinc-300 to-zinc-100 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-700 rounded-md items-end z-50 py-4 pr-4  ":
                toggled,
            })}
            animate={{ y: [-300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={cn(
                    "capitalize p-text px-4 py-2 rounded-md relative no-underline duration-300 ease-in",
                    {
                      "text-blue-700 font-bold dark:text-zinc-300":
                        pathname === link.path,
                      "text-muted-foreground": pathname !== link.path,
                    }
                  )}
                  onMouseOver={() => setHoveredPath(link.path)}
                  onMouseLeave={() => setHoveredPath(pathname)}
                  onClick={() => setToggled(false)}
                >
                  {/* Links */}
                  <Link href={`${link.path}`}>
                    <span>{link.id}</span>
                    {link.path === hoveredPath && (
                      <MotionDiv
                        className="absolute bottom-0 left-0 h-full bg-[#F2F5FA] dark:bg-zinc-900 rounded-md -z-10"
                        layoutId="navbar"
                        aria-hidden="true"
                        style={{
                          width: "100%",
                        }}
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          stiffness: 130,
                          damping: 9,
                          duration: 0.3,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}

            {status === "authenticated" && session?.user.role === "admin" || session?.user.role === 'super-admin' && (
              <li
                className={cn(
                  "cursor-pointer hover:text-blue-700 capitalize p-text text-muted-foreground px-4 "
                )}
              >
                <Link href="/dashboard" onClick={() => setToggled(false)}>
                  Dashboard
                </Link>
              </li>
            )}

            {status === "authenticated" && (
              <li
                className={cn(
                  "cursor-pointer hover:text-blue-700 capitalize p-text text-muted-foreground px-4 py-2"
                )}
                onClick={() => {
                  signOut();
                  router.replace("/");
                }}
              >
                sign-out
              </li>
            )}
          </MotionUl>
        </div>

        {/* Right */}
        <div className="flex item-center gap-2">
          {/* Theme Button */}
          <ThemeSwitch />

          {/* Toggle */}
          <div className="mmd:hidden">
            {toggled ? (
              <XIcon
                onClick={() => setToggled(false)}
                size={toggleButton.size}
                color={toggleButton.color}
                className={toggleButton.style}
              />
            ) : (
              <MenuIcon
                onClick={() => setToggled(true)}
                size={toggleButton.size}
                color={toggleButton.color}
                className={toggleButton.style}
              />
            )}
          </div>
        </div>
      </MaxWidthContainer>

      <div
        className={cn("hidden", {
          "block fixed bottom-[80px] left-[20px] z-50 animate-slideLeft duration-300 w-9/12 ":
            showForm,
        })}
      >
        <JiraForm />
      </div>

      <div
        className="fixed bottom-[20px] left-[20px] w-12 h-12 rounded-full bg-APP_BTN_BLUE hover:bg-blue-700 flex items-center justify-center animate-slideLeft z-30 opacity-[0.9] cursor-pointer"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? (
          <XIcon className="w-6  text-white" />
        ) : (
          <MessageCircle className="w-6  text-white" />
        )}
      </div>

      <div
        className={cn("hidden", {
          " fixed bottom-[20px] right-[20px] w-12 h-12 rounded-full bg-APP_BTN_BLUE hover:bg-blue-700 flex items-center justify-center animate-slideLeft z-30 opacity-[0.9] cursor-pointer":
            showNav,
        })}
        onClick={() => backToTop()}
      >
        <p className="text-white dark:text-zinc-400">&#8679;</p>
      </div>
    </>
  );
};

export default Navbar;
