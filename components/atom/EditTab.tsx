"use client";

import { Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const EditTab = ({ href }: { href: string }) => {
  const { data: session, status } = useSession();

  const isAuthenticated =
    status === "authenticated" &&
    (session?.user.role === "admin" || "super-admin");

  return (
    <>
      {isAuthenticated ? (
        <Link
          className="flex items-center p-2 m-2 absolute bottom-1 right-1 w-8 h-8 rounded-full bg-white dark:bg-gray-800 z-40"
          href={href}
        >
          <Pencil className="text-blue-900 dark:text-muted-foreground hover:text-blue-800 text-base cursor-pointer" />
        </Link>
      ) : null}
    </>
  );
};

export default EditTab;
