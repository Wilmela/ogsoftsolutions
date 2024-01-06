"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import "easymde/dist/easymde.min.css";
import { createIntroText } from "@/lib/actions/intro.action";
import Toast from "@/components/shared/Toast";
import { toast } from "react-toastify";
import { IntroTextField, IntroTextSchema } from "@/lib/validation";
import Spinner from "./Spinner";
import { Textarea } from "../ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const IntroEditForm = () => {
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isUpdating: false,
  });
  const [showForm, setShowForm] = useState(false);

  const form = useForm<IntroTextField>({
    resolver: zodResolver(IntroTextSchema),
    defaultValues: { text: "" },
  });

  /**
   * Function to create introduction text
   * @param text string
   */
  const onSubmit = async (text: IntroTextField) => {
    setFormStatus({ ...formStatus, isSubmitting: true });
    try {
      await createIntroText(text);

      toast.success("Created text successfully");
      setFormStatus({ ...formStatus, isSubmitting: false });
    } catch (e) {
      toast.error("Error creating text");

      setFormStatus({ ...formStatus, isSubmitting: false });

      throw e;
    }
  };

  return (
    <>
      {showForm ? (
        <>
          <Form {...form}>
            <form
              className="absolute bottom-100 w-full h-18 md:w-5/12 p-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Card className="flex flex-col space-y-2">
                <CardHeader>
                  <CardTitle>Add Introduction Text</CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField
                    name="text"
                    control={form.control}
                    render={({ field }) => {
                      
                      return (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              rows={10}
                              {...field}
                              placeholder="Enter an introduction text."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </CardContent>

                <CardFooter>
                  <div className="flex space-x-2 rounded-md">
                    <Button type="submit" variant="default">
                      Create {formStatus.isSubmitting ? <Spinner /> : null}
                    </Button>

                    <Button type="button" variant="secondary">
                      Update {formStatus.isUpdating ? <Spinner /> : null}
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </Form>

          <Toast duration={5000} position="top-right" theme="colored" />
        </>
      ) : (
        <div className="w-full flex items-center justify-center ">
          <p
            className="p-text hover:text-blue-700 cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            Click to add Introduction text.
          </p>
        </div>
      )}
    </>
  );
};

export default IntroEditForm;
