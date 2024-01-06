"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "../ui/checkbox";
import { getUsers, makeAdmin } from "@/lib/actions/user.action";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Toast from "../shared/Toast";

type UserProps = {
  id?: string;
  name: string;
  email: string;
  role: string;
  admin: boolean;
  setAdmin: () => void;
  user: any;
};

const User = ({ id, name, email, role, admin, setAdmin, user }: UserProps) => {
  return (
    <div className="w-full md:w-fit bg-white dark:bg-zinc-900 shadow-md rounded-md h-fit p-4">
      <p className="text-sm text-muted-foreground">{name}</p>
      <p className="text-sm text-muted-foreground">{email}</p>
      <p className="text-sm text-muted-foreground">{role}</p>

      {user.role !== "super-admin" && (
        <div className="flex items-center">
          <Checkbox id="admin" checked={admin} onCheckedChange={setAdmin} />
          <label
            htmlFor="admin"
            className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
          >
            Toggle role
          </label>
        </div>
      )}
    </div>
  );
};

const EditUser = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [admin, setAdmin] = useState(false);
  const { data: session } = useSession();
  const isSuperAdmin = session?.user.role === "super-admin";

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await getUsers();
        setUsers(res);
      } catch (error) {
        throw error;
      }
    }
    fetchUsers();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.map((user) => {
        const id = user._id.toString();

        return (
          <User
            key={id}
            name={user.name}
            email={user.email}
            role={user.role}
            admin={admin}
            setAdmin={async () => {
              if (!isSuperAdmin) return;

              try {
                await makeAdmin(user._id);
                toast.success("Role changed successfully");
              } catch (error) {
                toast.error("Failed to change role ");

                throw error;
              }

              setAdmin((p) => !p);
            }}
            user={user}
          />
        );
      })}
      <Toast />
    </div>
  );
};

export default EditUser;
