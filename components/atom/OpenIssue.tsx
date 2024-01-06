"use client";

import { deleteIssue, fetchIssues } from "@/lib/actions/issue.action";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import Toast from "../shared/Toast";
import Spinner from "./Spinner";
import { useDashboardContext } from "@/context";

// type Issue = {
//   _id: string;
//   name: string;
//   email: string;
//   issue: string;
//   detail: string;
// };

const OpenIssue = () => {
  const { setClosed } = useDashboardContext();
  const [openIssues, setOpenIssues] = useState<any[]>([]);
  const [completed, setCompleted] = useState(false);
  const wrapper = "flex space-x-2 items-center text-sm font-medium";

  const handleDelete = async (id: string) => {
    setCompleted(true);
    try {
      await deleteIssue(id);
      toast.success("Issue marked as completed");
      setClosed(true);
      setCompleted(false);
      location.reload();
    } catch (error) {
      toast.error("Failed to complete issue");
      setClosed(false);

      setCompleted(false);
      throw error;
    }
  };

  useEffect(() => {
    async function getTotalActiveIssues() {
      try {
        const listOfIssues = await fetchIssues();
        setOpenIssues(listOfIssues);
      } catch (error) {
        throw error;
      }
    }
    getTotalActiveIssues();
  }, []);
  
  return (
    <div>
      {openIssues.length > 0 ? (
        <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {openIssues.map((issue) => {
            return (
              <Card key={issue._id} className="relative">
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>
                      <div className={`${wrapper}`}>
                        <p>Name:</p>
                        <p>{issue.name}</p>
                      </div>
                      <p
                        className={cn(
                          "text-[12px] text-muted-foreground font-light"
                        )}
                      >
                        {issue.email}
                      </p>
                    </CardTitle>

                    <Button
                      className=" text-blue-800 hover:text-blue-900"
                      variant="ghost"
                      onClick={() => handleDelete(issue._id)}
                    >
                      {completed ? <Spinner /> : "Done "}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col space-y-1 p-2 leading-tight ml-2">
                  <div className={`${wrapper}`}>
                    <p>Issue:</p>
                    <p>{issue.issue}</p>
                  </div>
                  <div className={cn(wrapper)}>
                    <p>Detail:</p>
                    <p className={cn("text-muted-foreground", wrapper)}>
                      {issue.detail}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="absolute bottom-0 left-2"></CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <p className="poppins text-center">No open issues</p>
      )}
      <Toast />
    </div>
  );
};

export default OpenIssue;
