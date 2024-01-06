"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { AddClientSchema, ClientField } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUploadThing } from "@/lib/uploadthing";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import Toast from "../shared/Toast";
import Spinner from "./Spinner";
import {
  addClient,
  deleteClient,
  updateClient,
} from "@/lib/actions/client.action";
import { useRouter } from "next/navigation";
import { FormType, clientInitialValues } from "@/constants/defualtValues";
import { isBase64Image } from "@/lib/utils";
import { ClientType } from "@/type/type";

type ClientActionProps = {
  client?: ClientType;
  type: FormType;
};

const ClientForm = ({ client, type }: ClientActionProps) => {
  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<ClientField>({
    resolver: zodResolver(AddClientSchema),
    defaultValues: client
      ? {
          ...client,
          logo: client.logo,
          info: client.info,
          remark: client.remark,
        }
      : clientInitialValues,
  });

  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ClientField) => {
    setSubmitting(true);

    // CREATE CLIENT
    if (type === "Create") {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].url) {
        data.logo = imgRes[0].url;

        try {
          await addClient({
            logo: data.logo,
            info: data.info,
            remark: data.remark,
          });

          toast.success("Client added successfully");
          setSubmitting(false);
          router.replace("/");
        } catch (error) {
          toast.error("Failed to add Client");
          setSubmitting(false);
          throw error;
        }
      }
    }

    // UPDATE CLIENT
    if (type === "Update") {
      const blob = data.logo;

      const hasImageChanged = isBase64Image(blob);
      if (hasImageChanged) {
        const imgRes = await startUpload(files);

        if (imgRes && imgRes[0].url) {
          data.logo = imgRes[0].url;
        }
      }

      try {
        await updateClient({
          _id: client?._id as string,
          logo: data.logo,
          info: data.info,
          remark: data.remark,
        });

        toast.success("Info updated");
        router.push("/");
      } catch (error) {
        throw error;
      }
      // return;
    }
  };

  const deleteHospital = async () => {
    if (type === "Update") {
      await deleteClient(client?._id as string);
      toast.success("Client deleted");
      router.push("/");
    }
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2"
      >
        <Card className="flex flex-col space-y-2">
          <CardHeader>
            <CardTitle className="py-2">{type} Client</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-2">
            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center">
                  <FormLabel>
                    {field.value ? (
                      <Image
                        src={field.value}
                        alt="client_logo"
                        width={40}
                        height={40}
                        priority
                        className="rounded-full object-contain"
                      />
                    ) : (
                      <Image
                        src="/logo.png"
                        alt="profile_icon"
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    )}
                  </FormLabel>
                  <FormControl className="flex-1 text-base-semibold text-gray-200">
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="Client Logo"
                      className="account-form_image-input"
                      onChange={(e) => handleImage(e, field.onChange)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <InputField
              name="info"
              label="Info"
              control={form.control}
              placeholder="Enter hospital name and city."
              type="text"
            />

            <FormField
              name="remark"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="p-tex text-muted-foreground">
                    Remark
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter client's remark"
                      {...field}
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Button
              disabled={submitting}
              type="submit"
              variant="secondary"
              className="bg-APP_BTN_BLUE hover:bg-blue-700 text-white"
            >
              {type} {submitting ? <Spinner /> : null}
            </Button>

            <Button type="reset" variant="ghost" onClick={deleteHospital}>
              {type === "Create" ? "Cancel" : "Delete"}
            </Button>
          </CardFooter>
        </Card>
      </form>
      <Toast />
    </Form>
  );
};

export default ClientForm;
