"use client";

import { fetchTeamMembers } from "@/lib/actions/team.action";
import { cn } from "@/lib/utils";
import { TeamMemberProps } from "@/type/type";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AuthorProfile = ({
  singlePost,
}: {
  singlePost:
    | {
        author: string;
      }
    | undefined;
}) => {
  // const { data: session } = useSession();
  const [team, setTeam] = useState<TeamMemberProps[]>([]);

  const currentUser = team.find(
    (member) => member.fullName === singlePost?.author
  );

  useEffect(() => {
    async function getTeamMember() {
      const members = await fetchTeamMembers();
      setTeam(members);
    }

    getTeamMember();
  }, []);
  return (
    <>
      <div className="flex flex-col space-y-2 items-center">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden relative">
          <Image
            src={currentUser?.photo as string}
            alt="author_pic"
            fill
            priority
            sizes="(max-width: 768px) 100vh, 100px"
            className="object-contain "
          />
        </div>
        <p className="poppins text-gray-700">Author: {currentUser?.fullName}</p>
        <p
          className={cn(
            "text-justify  p-text text-base leading-tight tracking-tight "
          )}
        >
          {currentUser?.detail}
        </p>
      </div>
    </>
  );
};

export default AuthorProfile;
