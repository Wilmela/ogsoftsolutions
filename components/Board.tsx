"use client";

import { DASHBOARD_NAVS } from "@/constants/dashboard-items";
import { useState } from "react";
import IntroEditForm from "./atom/IntroEditForm";
import { cn } from "@/lib/utils";
import ClientForm from "./atom/ClientForm";
import AddPost from "./atom/PostForm";
import OpenIssue from "./atom/OpenIssue";
import ListOfClients from "./atom/ListOfClients";
import EditUser from "./atom/EditUser";
import NewLetterSubs from "./atom/NewLetterSubs";
import TeamForm from "./atom/TeamForm";

const Board = () => {
  const items = DASHBOARD_NAVS.map((i) => i.value);
  const [isSelected, setIsSelected] = useState<string>(items[0]);
  const [isActive, setIsActive] = useState<string>("add_intro");

  function switchView() {
    switch (isSelected) {
      case items[0]:
        return <IntroEditForm />;
      case items[1]:
        return <ClientForm type="Create" />;
      case items[2]:
        return <AddPost type="Create" />;
      case items[3]:
        return <TeamForm type='Create' />;
      case items[4]:
        return <OpenIssue />;
      case items[5]:
        return <ListOfClients />;
      case items[6]:
        return <EditUser />;
      case items[7]:
        return <NewLetterSubs />;
    }
  }

  return (
    <div className="flex flex-1 flex-col md:flex-row gap-4 ">
      {/* Left */}
      <div className="flex-[0.2] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 items-center border rounded-md px-2 md:py-4 md:px-0 bg-blue-50 dark:bg-transparent">
        {DASHBOARD_NAVS.map((item, i: number) => {
          return (
            <div key={item.title} className="flex flex-col items-center my-2">
              <div
                onClick={() => {
                  setIsSelected(item.value);
                }}
                className={cn(
                  "w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 flex items-center justify-center cursor-pointer"
                )}
              >
                {
                  <item.Icon className="w-1/2 h-1/2 text-blue-900 dark:text-blue-100" />
                }
              </div>
              <p className="p-text text-base">{item.title}</p>
            </div>
          );
        })}
      </div>

      {/* Right */}
      <div className="flex-1 flex justify-center">{switchView()}</div>
    </div>
  );
};

export default Board;
