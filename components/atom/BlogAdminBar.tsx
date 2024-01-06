"use client";

import { fetchTeamMembers } from "@/lib/actions/team.action";
import { TeamMemberProps } from "@/type/type";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MyAvatar } from "@/components/atom/Avatar";

const BlogAdminBar = () => {
  const { data: session } = useSession();
  const [team, setTeam] = useState<TeamMemberProps[]>([]);

  const currentUser = team.find(
    (member) => member?.fullName === session?.user.name
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
      {session?.user.role === "admin" ||
      session?.user.role === "super-admin" ? (
        <div className="w-full flex items-center space-x-2 justify-end border-b py-2">
          <p className="p-text">Welcome, {session?.user.name}</p>
          <MyAvatar imgUrl={currentUser?.photo as string} alt="admin-photo" />
        </div>
      ) : null}
    </>
  );
};

export default BlogAdminBar;
