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
import { TeamField, TeamSchema } from "@/lib/validation";
import {
  addTeamMember,
  deleteTeamMember,
  updateTeamMember,
} from "@/lib/actions/team.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import Toast from "../shared/Toast";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";
import { FormType, teamInitialValues } from "@/constants/defualtValues";
import { ITeam } from "@/lib/database/model/Team.model";
import { TeamMemberProps } from "@/type/type";

type TeamProps = {
  type: FormType;
  member?: TeamMemberProps;
};

const TeamForm = ({ type, member }: TeamProps) => {
  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<TeamField>({
    resolver: zodResolver(TeamSchema),
    defaultValues: member
      ? {
          ...member,
          fullName: member.fullName,
          photo: member.photo,
          position: member.position,
          detail: member.detail,
        }
      : teamInitialValues,
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

  const onSubmit = async (data: TeamField) => {
    setSubmitting(true);

    if (type === "Create") {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].url) {
        data.photo = imgRes[0].url;

        try {
          await addTeamMember({
            photo: data.photo,
            fullName: data.fullName,
            position: data.position,
            detail: data.detail,
          });

          toast.success("Team member added successfully");
          setSubmitting(false);
          router.push("/about");
        } catch (error) {
          toast.error("Failed to add Team member");
          setSubmitting(false);
          throw error;
        }
      }
    }

    if (type === "Update") {
      const blob = data.photo;

      const hasImageChanged = isBase64Image(blob);
      if (hasImageChanged) {
        const imgRes = await startUpload(files);

        if (imgRes && imgRes[0].url) {
          data.photo = imgRes[0].url;
        }
      }

      await updateTeamMember({
        _id: member?._id as string,
        photo: data.photo,
        fullName: data.fullName,
        position: data.position,
        detail: data.detail,
      });

      toast.success("Info updated");
      router.push("/about");
    }
    return;
  };

  const deleteMember = async () => {
    if (type === "Create") {
      await deleteTeamMember(member?._id as string);
      toast.success("Member deleted");
      router.push("/about");
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
            <CardTitle className="py-2">{type} Member</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-2">
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center">
                  <FormLabel>
                    {field.value ? (
                      <Image
                        src={field.value}
                        alt="team_photo"
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
                      placeholder="Add team photo"
                      className="account-form_image-input"
                      onChange={(e) => handleImage(e, field.onChange)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <InputField
              name="fullName"
              label="Full_name"
              control={form.control}
              placeholder="Enter full name"
              type="text"
            />

            <InputField
              name="position"
              label="Position"
              control={form.control}
              placeholder="Enter position"
              type="text"
            />

            <FormField
              name="detail"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="p-tex text-muted-foreground">
                    Detail
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter member's detail"
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

            <Button
              disabled={submitting}
              type="reset"
              variant="ghost"
              onClick={deleteMember}
            >
              {type === "Create" ? "Cancel" : "Delete"}
            </Button>
          </CardFooter>
        </Card>
      </form>
      <Toast />
    </Form>
  );
};

export default TeamForm;
