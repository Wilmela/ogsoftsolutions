"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IssueType, issueSchema } from "@/lib/validation";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "../ui/form";
import Spinner from "./Spinner";
import InputField from "./InputField";
import Toast from "../shared/Toast";
import { Textarea } from "../ui/textarea";
import { createIssue } from "@/lib/actions/issue.action";
import { useRouter } from "next/navigation";

const JiraForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const form = useForm<IssueType>({
    resolver: zodResolver(issueSchema),
    defaultValues: {
      name: "",
      email: "",
      issue: "",
      detail: "",
    },
  });

  const submitForm = async (data: IssueType) => {
    setSubmitting(true);

    try {
      await createIssue(data);
      toast.success("Issue created successful");
      router.push('/')
      
      form.reset();
      setSubmitting(false);
    } catch (error) {
      toast.error("Failed to create issue");

      setSubmitting(false);
      throw error;
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="w-full md:w-[350px] lg:w-[400px]"
        >
          <Card>
            <CardHeader>
              <CardTitle>Issue Form</CardTitle>
              <CardDescription className="text-muted-foreground">
                Create a JIRA ticket.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid w-full items-center gap-2">
                <InputField
                  name="name"
                  type="text"
                  control={form.control}
                  label="Name"
                  placeholder="full name"
                />
                <InputField
                  name="email"
                  type="email"
                  control={form.control}
                  label="Email"
                  placeholder="Email"
                />
                <InputField
                  name="issue"
                  type="text"
                  control={form.control}
                  label="Issue"
                  placeholder="Enter issue title"
                />

                <FormField
                  name="detail"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Detail
                      </FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-APP_BTN_BLUE text-white"
              >
                Submit {submitting && <Spinner />}
              </Button>
              <Button
                disabled={submitting}
                type="reset"
                onClick={() => form.reset()}
                variant="ghost"
              >
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
      <Toast position="top-right" theme="colored" duration={5000} />
    </>
  );
};

export default JiraForm;
