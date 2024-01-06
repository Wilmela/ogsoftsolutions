"use client";
import React, { useEffect, useState } from "react";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Tabs, TabsTrigger, TabsList } from "./ui/tabs";

type Theme = 'light'| 'dark';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // const [switchTheme, setSwitchTheme] = useState<Theme>("dark");

  // const handleSwitch = () => {
  //   if (switchTheme === "dark") {
  //     setSwitchTheme("light");
  //     setTheme('light');

  //   } else  {
  //     setSwitchTheme("dark");
  //     setTheme("dark");

  //   }
  // };

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border dark:border-neutral-800 dark:bg-[#030303]">
        <TabsTrigger value='light' onClick={(e) => setTheme('light')}>
            <SunIcon className="w-[1.2rem] h-[1.2re]" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={(e) => setTheme("dark")}>
          <MoonIcon className="w-[1.2rem] h-[1.2re] rotate-90 transition-all dark:rotate-0" />
        </TabsTrigger>
        
        {/* <TabsTrigger value="system" onClick={(e) => setTheme("system")}>
          <DesktopIcon className="w-[1.2rem] h-[1.2re]" />
        </TabsTrigger> */}
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitch;
